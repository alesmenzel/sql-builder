interface BuilderInterface {
  toSQL(): string
  clone(builder: Builder): BuilderInterface
}

export const DEFAULT_LIKE_ESCAPE = '|'

export function escapeName(name: string) {
  return name
    .replace(/"/g, '')
    .split('.')
    .map((part) => `"${part}"`)
    .join('.')
}

export function escapeLike(value: string, escape: string) {
  if (escape.length !== 1) {
    throw new BuilderError(`Escape character must be exactly 1 character long, give: ${escape}`)
  }
  return `${value.replace(new RegExp(`[${escape}]`, 'g'), escape.repeat(2))}`
}

export function ifset(value: string) {
  if (value) return value
  return ''
}

export function parenthesis(value: string, count?: number) {
  if (count != null && count === 1) return value
  return `(${value})`
}

export function castAs(field: string, type: string) {
  return `${field}::${type}`
}

export function compose(
  items: (string | undefined | null | false | number | boolean)[],
  separator: string = ' '
): string {
  return (items.filter(Boolean) as string[]).join(separator)
}

export function list(values: string[]) {
  return values.join(', ')
}

class BuilderBase implements BuilderInterface {
  builder: Builder

  constructor(builder: Builder) {
    this.builder = builder
    builder._add(this)
  }

  clone(_builder: Builder): BuilderInterface {
    throw new Error('Must be implemented in child class.')
  }

  toSQL(): string {
    throw new Error('Must be implemented in child class.')
  }
}

export type WithQuery = {
  queryName: string
  alias: string
  columns?: string[]
  builder: Builder
}
export type WithQueryInput = WithQuery | WithQuery[]

export class WithBuilder extends BuilderBase implements BuilderInterface {
  _withQueries: WithQuery[]

  constructor(builder: Builder, withQuery: WithQueryInput) {
    super(builder)
    this._withQueries = Array.isArray(withQuery) ? withQuery : [withQuery]

    for (const withQuery of this._withQueries) {
      withQuery.builder._parentBuilder = builder
    }
  }

  select(fields: string[]) {
    return new SelectBuilder(this.builder, fields)
  }

  raw(rawSql: string) {
    new RawBuilder(this.builder, rawSql)
    return this
  }

  toSQL() {
    return `WITH ${list(
      this._withQueries.map(({ queryName, columns, alias, builder }) =>
        compose([
          escapeName(queryName),
          columns && parenthesis(columns.map(escapeName).join(', ')),
          'AS',
          escapeName(alias),
          parenthesis(builder.toSQL()),
        ])
      )
    )}`
  }

  clone(builder: Builder) {
    return new WithBuilder(builder, this._withQueries)
  }
}

export type SelectFieldNormalized = { fieldName: string; escape?: boolean; castAs?: string }
export type SelectField = string | SelectFieldNormalized
export type SelectFieldMapping = {
  [field: string]: SelectField
}

export class SelectBuilder extends BuilderBase implements BuilderInterface {
  _fields: SelectFieldNormalized[]
  _mapping: SelectFieldMapping

  constructor(builder: Builder, fields: SelectField[], mapping?: SelectFieldMapping) {
    super(builder)
    this._fields = fields.map((field) => {
      if (typeof field === 'string') {
        return { fieldName: field, escape: true } satisfies SelectFieldNormalized
      }
      return field
    })
    this._mapping = mapping
  }

  // mapping = { fieldA: 'column_a', fieldB: { field: 'ARRAY (SELECT id FROM tableX)', escape: false } }
  // TODO: Select from mapping, e.g. new SelectBuilder(builder, fields, mapping)

  from(fromItem: FromItem, fromJoin?: FromJoin) {
    return new FromBuilder(this.builder, fromItem, fromJoin)
  }

  raw(rawSql: string) {
    new RawBuilder(this.builder, rawSql)
    return this
  }

  toSQL() {
    if (!this._fields.length) throw new BuilderError('Empty fields for select.')
    return `SELECT ${list(
      this._fields.map((field) => {
        let name = field.fieldName
        if (field.escape) name = escapeName(field.fieldName)
        if (field.castAs) name = castAs(field.fieldName, field.castAs)
        return name
      })
    )}`
  }

  clone(builder: Builder) {
    return new SelectBuilder(builder, this._fields)
  }
}

export type JoinItem = {
  tableName: string
  schema?: string
  alias?: string
  type?:
    | 'INNER'
    | 'LEFT'
    | 'RIGHT'
    | 'FULL'
    | 'LEFT OUTER'
    | 'RIGHT OUTER'
    | 'FULL OUTER'
    | 'CROSS'
    | 'NATURAL'
  joinType: 'ON' | 'USING'
  // TODO: This is just raw query
  rawCondition: string
}

export class JoinBuilder extends BuilderBase implements BuilderInterface {
  _joins: JoinItem[] = []

  constructor(builder: Builder) {
    super(builder)
  }

  join(join: JoinItem, { enabled = true }: { enabled?: boolean } = {}) {
    if (enabled) {
      this._joins.push(join)
    }
    return this
  }

  toSQL() {
    return compose(
      this._joins.map(({ type, tableName, schema, alias, joinType, rawCondition }) => {
        return compose([
          type,
          'JOIN',
          compose([schema && escapeName(schema), escapeName(tableName)], '.'),
          alias && `AS ${escapeName(alias)}`,
          type !== 'CROSS' && joinType,
          type !== 'NATURAL' && type !== 'CROSS' && parenthesis(rawCondition),
        ])
      }),
      '\n'
    )
  }

  clone(builder: Builder): BuilderInterface {
    return new JoinBuilder(builder)
  }
}

export type FromItemTable = { tableName: string; schema?: string; alias?: string }
export type FromJoin = (table: JoinBuilder) => void
export type FromItemSubSelect = { select: Builder; alias?: string }
export type FromItem = string | FromItemTable | FromItemSubSelect
export type FromItemNormalized = FromItemTable | FromItemSubSelect

export class FromBuilder extends BuilderBase implements BuilderInterface {
  _fromItem: FromItemNormalized
  _fromJoin?: FromJoin

  constructor(builder: Builder, fromItem: FromItem, fromJoin?: FromJoin) {
    super(builder)
    this._fromItem =
      typeof fromItem === 'string' ? ({ tableName: fromItem } satisfies FromItemTable) : fromItem
    this._fromJoin = fromJoin
  }

  where(conditions: WhereCondition) {
    return new WhereBuilder(this.builder, conditions)
  }

  groupBy(groupByInput: GroupByInput) {
    return new GroupByBuilder(this.builder, groupByInput)
  }

  having() {
    return this
  }

  orderBy(orderByInput: OrderByInput) {
    return new OrderByBuilder(this.builder, orderByInput)
  }

  limit(count: number) {
    return new LimitBuilder(this.builder, count)
  }

  offset(start: number, mode: 'ROW' | 'ROWS') {
    return new OffsetBuilder(this.builder, start, mode)
  }

  raw(rawSql: string) {
    new RawBuilder(this.builder, rawSql)
    return this
  }

  toSQL() {
    const joinBuilder = new JoinBuilder(this.builder)
    this._fromJoin?.(joinBuilder)
    const joinSql = joinBuilder.toSQL()

    if ('select' in this._fromItem) {
      const { select, alias } = this._fromItem
      return compose([
        'FROM',
        parenthesis(select.toSQL()),
        alias && `AS ${escapeName(alias)}`,
        joinSql,
      ])
    }

    const { tableName, schema, alias } = this._fromItem
    return compose([
      'FROM',
      compose([schema && escapeName(schema), escapeName(tableName)], '.'),
      alias && `AS ${escapeName(alias)}`,
      joinSql,
    ])
  }

  clone(builder: Builder) {
    return new FromBuilder(builder, this._fromItem, this._fromJoin)
  }
}

export const OpEq = Symbol('$eq')
export const OpNeq = Symbol('$neq')
export const OpIn = Symbol('$in')
export const OpAny = Symbol('$any')
export const OpSome = Symbol('$some')
export const OpAll = Symbol('$all')
export const OpGt = Symbol('$gt')
export const OpGte = Symbol('$gte')
export const OpLt = Symbol('$lt')
export const OpLte = Symbol('$lte')
export const OpOr = Symbol('$or')
export const OpAnd = Symbol('$and')
export const OpNot = Symbol('$not')
export const OpRaw = Symbol('$raw')
export const OpLike = Symbol('$like')
export const OpILike = Symbol('$ilike')
export const OpBetween = Symbol('$between')

export const Op = {
  $eq: OpEq,
  $neq: OpNeq,
  $in: OpIn,
  $any: OpAny,
  $some: OpSome,
  $all: OpAll,
  $gt: OpGt,
  $gte: OpGte,
  $lt: OpLt,
  $lte: OpLte,
  $or: OpOr,
  $and: OpAnd,
  $not: OpNot,
  $raw: OpRaw,
  $like: OpLike,
  $iLike: OpILike,
  $between: OpBetween,
}

export const Skip = Symbol('skip')

export interface FragmentInterface {
  toSQL(builder: Builder): string
}

export class ColumnFragment implements FragmentInterface {
  _name: string

  constructor(name: string) {
    this._name = name
  }

  toSQL(_builder: Builder) {
    return `${escapeName(this._name)}`
  }
}

export class RawFragment implements FragmentInterface {
  _sql: string

  constructor(sql: string) {
    this._sql = sql
  }

  toSQL(_builder: Builder) {
    return this._sql
  }
}

type FunctionFragmentArg =
  | string
  | number
  | boolean
  | Date
  | { value: string; escape?: boolean }
  | FunctionFragment
  | ColumnFragment
  | RawFragment

export class FunctionFragment implements FragmentInterface {
  _name: string
  _args: FunctionFragmentArg[]

  constructor(name: string, args: FunctionFragmentArg[] = []) {
    this._name = name
    this._args = args
  }

  toSQL(builder: Builder) {
    return `${this._name}(${list(
      this._args.map((arg) => {
        if (arg instanceof FunctionFragment) return arg.toSQL(builder)
        if (arg instanceof ColumnFragment) return arg.toSQL(builder)
        if (arg instanceof RawFragment) return arg.toSQL(builder)
        if (typeof arg === 'object' && !(arg instanceof Date)) {
          return arg.escape ? escapeName(arg.value) : arg.value
        }
        return builder._addReplacement(arg)
      })
    )})`
  }
}

export type WhereValueReplacement = typeof REPLACE_BY_NUMBER | ReplaceByName
export type WhereUserValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Date
  | typeof Skip
  | FunctionFragment
  | WhereValueReplacement

export type WhereNestedCondition = WhereOrCondition | WhereAndCondition | WhereNotCondition
export type WhereObjectFields = { [field: string]: WhereFieldValue }

export type WhereMultiNested = (WhereNestedCondition | WhereConditionItem)[] | WhereObjectFields

export type WhereOrCondition = {
  [OpOr]: WhereMultiNested
}
export type WhereAndCondition = {
  [OpAnd]: WhereMultiNested
}

export type WhereSingleNested = WhereNestedCondition | WhereConditionItem

export type WhereNotCondition = {
  [OpNot]: WhereSingleNested
}

export type WhereOpLikeValue =
  | string
  | FunctionFragment
  | { value: string | FunctionFragment; escape?: string }

export type WhereOpBetweenValue = {
  start: WhereUserValue
  end: WhereUserValue
  symmetric?: boolean
}

export type WhereOpFilter = ':csv' | ':list' | ':json' | string

export type WhereOperator =
  | { [OpEq]: WhereUserValue; filter?: WhereOpFilter }
  | { [OpNeq]: WhereUserValue; filter?: WhereOpFilter }
  | { [OpLike]: WhereOpLikeValue; filter?: never }
  | { [OpILike]: WhereOpLikeValue; filter?: never }
  | { [OpIn]: WhereUserValue[]; filter?: WhereOpFilter }
  | { [OpAny]: WhereUserValue[]; filter?: WhereOpFilter }
  | { [OpSome]: WhereUserValue[]; filter?: WhereOpFilter }
  | { [OpAll]: WhereUserValue[]; filter?: WhereOpFilter }
  | { [OpBetween]: WhereOpBetweenValue; filter?: WhereOpFilter }
  | { [OpGt]: number | WhereValueReplacement; filter?: WhereOpFilter }
  | { [OpGte]: number | WhereValueReplacement; filter?: WhereOpFilter }
  | { [OpLt]: number | WhereValueReplacement; filter?: WhereOpFilter }
  | { [OpLte]: number | WhereValueReplacement; filter?: WhereOpFilter }
  | { [OpRaw]: string; filter?: never }

export type WhereFieldValue =
  | WhereUserValue // Alias for OpEq
  | WhereUserValue[] // Alias for OpIn
  | WhereOperator

export type WhereConditionItemFilter = WhereNestedCondition | WhereFieldValue

export type WhereConditionItem = {
  field: string | { name: string; escape?: boolean }
  filter: WhereConditionItemFilter
}

export type WhereCondition = WhereNestedCondition | WhereObjectFields | WhereConditionItem[]

// --- NORMALIZED ---
export type WhereNestedConditionNormalized =
  | WhereOrConditionNormalized
  | WhereAndConditionNormalized
  | WhereNotConditionNormalized

export type WhereNestedNormalized = WhereNestedConditionNormalized | WhereConditionItemNormalized[]

export type WhereOrConditionNormalized = { [OpOr]: WhereNestedNormalized[] }
export type WhereAndConditionNormalized = { [OpAnd]: WhereNestedNormalized[] }
export type WhereNotConditionNormalized = { [OpNot]: WhereNestedNormalized }

export type WhereOpLikeValueNormalized = { value: string | FunctionFragment; escape?: string }

export type WhereOperatorNormalized =
  | { [OpEq]: WhereUserValue; filter?: WhereOpFilter }
  | { [OpNeq]: WhereUserValue; filter?: WhereOpFilter }
  | { [OpLike]: WhereOpLikeValueNormalized; filter?: never }
  | { [OpILike]: WhereOpLikeValueNormalized; filter?: never }
  | { [OpIn]: WhereUserValue[]; filter?: WhereOpFilter }
  | { [OpAny]: WhereUserValue[]; filter?: WhereOpFilter }
  | { [OpSome]: WhereUserValue[]; filter?: WhereOpFilter }
  | { [OpAll]: WhereUserValue[]; filter?: WhereOpFilter }
  | { [OpBetween]: WhereOpBetweenValue; filter?: WhereOpFilter }
  | { [OpGt]: number | WhereValueReplacement; filter?: WhereOpFilter }
  | { [OpGte]: number | WhereValueReplacement; filter?: WhereOpFilter }
  | { [OpLt]: number | WhereValueReplacement; filter?: WhereOpFilter }
  | { [OpLte]: number | WhereValueReplacement; filter?: WhereOpFilter }
  | { [OpRaw]: string }

export type WhereFieldValueNormalized =
  | typeof Skip
  | FunctionFragment
  | WhereValueReplacement
  | WhereOperatorNormalized

export type WhereConditionItemFilterNormalized =
  | WhereNestedConditionNormalized
  | WhereFieldValueNormalized

export type WhereConditionItemNormalized = {
  field: { name: string | FunctionFragment; escape?: boolean }
  filter: WhereConditionItemFilterNormalized
}

export type WhereConditionNormalized =
  | WhereNestedConditionNormalized
  | WhereConditionItemNormalized[]

export class WhereBuilder extends BuilderBase implements BuilderInterface {
  _condition: WhereCondition
  _conditionNormalized: WhereConditionNormalized

  constructor(builder: Builder, condition: WhereCondition) {
    super(builder)
    this._condition = condition
    this._conditionNormalized = this._normalizeConditions(condition)

    this._buildCondition = this._buildCondition.bind(this)
    this._normalizeConditionItem = this._normalizeConditionItem.bind(this)
  }

  groupBy(groupByInput: GroupByInput) {
    return new GroupByBuilder(this.builder, groupByInput)
  }

  having() {
    return this
  }

  orderBy(orderByInput: OrderByInput) {
    return new OrderByBuilder(this.builder, orderByInput)
  }

  limit(count: number) {
    return new LimitBuilder(this.builder, count)
  }

  offset(start: number, mode: 'ROW' | 'ROWS') {
    return new OffsetBuilder(this.builder, start, mode)
  }

  raw(rawSql: string) {
    new RawBuilder(this.builder, rawSql)
    return this
  }

  _isNested<T extends WhereNestedCondition | WhereNestedConditionNormalized>(
    condition: unknown | T
  ): condition is T {
    return (
      typeof condition === 'object' &&
      (OpOr in condition || OpAnd in condition || OpNot in condition)
    )
  }

  _normalizeConditions(conditions: WhereCondition): WhereConditionNormalized {
    if (Array.isArray(conditions)) {
      return conditions.map(this._normalizeConditionItem)
    }

    if (this._isNested<WhereNestedCondition>(conditions)) {
      return this._normalizeNestedFilters(conditions)
    }

    return this._normalizeFields(conditions)
  }

  _normalizeConditionItem({ field, filter }: WhereConditionItem): WhereConditionItemNormalized {
    return {
      field: typeof field === 'string' ? { name: field, escape: true } : field,
      filter: this._isNested(filter)
        ? this._normalizeNestedFilters(filter)
        : this._normalizeField(filter),
    }
  }

  _normalizeFilter(filter: WhereConditionItemFilter): WhereConditionItemFilterNormalized {
    if (filter instanceof FunctionFragment || filter instanceof ReplaceByName) return filter
    if (filter === undefined || filter === Skip || filter === REPLACE_BY_NUMBER) return Skip

    // Default aliases
    if (filter === null || filter instanceof Date) return { [OpEq]: filter as null | Date }
    if (typeof filter !== 'object') return { [OpEq]: filter }
    if (Array.isArray(filter)) return { [OpIn]: filter }

    if (this._isNested(filter)) {
      return this._normalizeNestedFilters(filter)
    }

    return this._normalizeOperator(filter)
  }

  _normalizeOperator(operator: WhereOperator): WhereOperatorNormalized {
    if (OpILike in operator) {
      const value = operator[OpILike]
      return {
        [OpILike]:
          typeof value === 'string' || value instanceof FunctionFragment
            ? ({ value } satisfies WhereOpLikeValueNormalized)
            : value,
      }
    }
    if (OpLike in operator) {
      const value = operator[OpLike]
      return {
        [OpLike]:
          typeof value === 'string' || value instanceof FunctionFragment
            ? ({ value } satisfies WhereOpLikeValueNormalized)
            : value,
      }
    }
    return operator
  }

  _normalizeFields(conditions: WhereObjectFields) {
    return Object.entries(conditions).map(
      ([field, condition]): WhereConditionItemNormalized => ({
        field: { name: field, escape: true },
        filter: this._normalizeField(condition),
      })
    )
  }

  _normalizeNestedFilters(condition: WhereNestedCondition): WhereNestedConditionNormalized {
    if (OpOr in condition) {
      // @ts-expect-error // TODO
      return { [OpOr]: this._normalizeMultiNested(condition[OpOr]) }
    }

    if (OpAnd in condition) {
      // @ts-expect-error // TODO
      return { [OpAnd]: this._normalizeMultiNested(condition[OpAnd]) }
    }

    if (OpNot in condition) {
      return { [OpNot]: this._normalizeSingleNested(condition[OpNot]) }
    }
  }

  _normalizeMultiNested(conditions: WhereMultiNested): WhereNestedNormalized {
    if (Array.isArray(conditions))
      return conditions.map((condition): WhereConditionItemNormalized => {
        if (this._isNested<WhereNestedCondition>(condition)) {
          // @ts-expect-error // TODO
          return this._normalizeNestedFilters(condition)
        }
        return this._normalizeConditionItem(condition)
      })

    return this._normalizeFields(conditions)
  }

  _normalizeSingleNested(condition: WhereSingleNested): WhereNestedNormalized {
    if (this._isNested(condition)) return this._normalizeNestedFilters(condition)
    const { field, filter } = condition
    return [
      {
        field: typeof field === 'string' ? { name: field, escape: true } : field,
        filter: this._normalizeFilter(filter),
      },
    ] satisfies WhereConditionItemNormalized[]
  }

  _normalizeField(value: WhereFieldValue): WhereFieldValueNormalized {
    if (value === undefined) return Skip
    if (
      value === Skip ||
      value instanceof FunctionFragment ||
      value instanceof ReplaceByName ||
      value === REPLACE_BY_NUMBER
    ) {
      return value
    }
    if (Array.isArray(value)) return { [OpIn]: value }
    if (typeof value !== 'object' || value instanceof Date) return { [OpEq]: value }
    return this._normalizeOperator(value)
  }

  _normalizeLike(condition: WhereOpLikeValue): WhereOpLikeValueNormalized {
    if (typeof condition[OpLike] === 'string' || condition[OpLike] instanceof FunctionFragment) {
      return { value: condition[OpLike] } satisfies WhereOpLikeValueNormalized
    }
    return condition[OpLike]
  }

  _resolveFunction(name: string | FunctionFragment, escape?: boolean) {
    if (name instanceof FunctionFragment) {
      return name.toSQL(this.builder)
    }
    return escape ? `${escapeName(name)}` : name
  }

  _buildNestedCondition(condition: WhereNestedConditionNormalized, level: number): string {
    if (OpOr in condition) {
      const conditions = condition[OpOr]
      if (!conditions.length) throw new BuilderError('Empty $or condition.')
      return parenthesis(
        conditions.map((condition) => this._buildCondition(condition, level + 1)).join(' OR '),
        level ? conditions.length : 1
      )
    }

    if (OpAnd in condition) {
      const conditions = condition[OpAnd]
      if (!conditions.length) throw new BuilderError('Empty $and condition.')
      return parenthesis(
        conditions.map((condition) => this._buildCondition(condition, level + 1)).join(' AND '),
        level ? conditions.length : 1
      )
    }

    if (OpNot in condition) {
      return `NOT ${this._buildCondition(condition[OpNot], level + 1)}`
    }
  }

  _getReplacement(filter: WhereOperator, op: symbol, ...paths: string[]) {
    const replacement = this.builder._addReplacement(
      paths.reduce((acc, path) => acc[path], filter[op])
    )
    return compose([replacement, filter.filter], '')
  }

  _buildConditionItem({ field, filter }: WhereConditionItemNormalized, level: number): string {
    let name = this._resolveFunction(field.name, field.escape)

    if (filter === null) {
      return `${name} IS NULL`
    }

    if (Array.isArray(filter)) {
      return this._buildCondition([{ field, filter: { [OpIn]: filter } }], level + 1)
    }

    if (
      filter instanceof FunctionFragment ||
      filter instanceof ColumnFragment ||
      filter instanceof RawFragment
    ) {
      return `${name} = ${filter.toSQL(this.builder)}`
    }

    if (filter instanceof ReplaceByName || filter === REPLACE_BY_NUMBER) {
      return this._buildCondition([{ field, filter: { [OpEq]: filter } }], level + 1)
    }

    if (typeof filter === 'object') {
      if (this._isNested<WhereNestedConditionNormalized>(filter)) {
        return this._buildNestedCondition(filter, level)
      }
      if (OpEq in filter) {
        const replacement = this._getReplacement(filter, OpEq)
        return `${name} = ${replacement}`
      }
      if (OpNeq in filter) {
        const replacement = this._getReplacement(filter, OpNeq)
        return `${name} != ${replacement}`
      }
      if (OpIn in filter) {
        const replacement = this._getReplacement(filter, OpIn)
        return `${name} IN ${parenthesis(replacement)}`
      }
      if (OpAny in filter) {
        const replacement = this._getReplacement(filter, OpAny)
        return `${name} = ANY ${parenthesis(replacement)}`
      }
      if (OpSome in filter) {
        const replacement = this._getReplacement(filter, OpSome)
        return `${name} = SOME ${parenthesis(replacement)}`
      }
      if (OpAll in filter) {
        const replacement = this._getReplacement(filter, OpAll)
        return `${name} = ALL ${parenthesis(replacement)}`
      }
      if (OpGt in filter) {
        const replacement = this._getReplacement(filter, OpGt)
        return `${name} > ${compose([replacement, filter.filter])}`
      }
      if (OpGte in filter) {
        const replacement = this._getReplacement(filter, OpGte)
        return `${name} >= ${compose([replacement, filter.filter])}`
      }
      if (OpLt in filter) {
        const replacement = this._getReplacement(filter, OpLte)
        return `${name} < ${replacement}`
      }
      if (OpLte in filter) {
        const replacement = this._getReplacement(filter, OpLte)
        return `${name} <= ${replacement}`
      }
      if (OpLike in filter) {
        const { value, escape = DEFAULT_LIKE_ESCAPE } = filter[OpLike]
        const replacement = this.builder._addReplacement(
          escapeLike(this._resolveFunction(value), escape)
        )
        return `${name} LIKE ${replacement} ESCAPE '${escape}'`
      }
      if (OpILike in filter) {
        const { value, escape = DEFAULT_LIKE_ESCAPE } = filter[OpILike]
        const replacement = this.builder._addReplacement(
          escapeLike(this._resolveFunction(value), escape)
        )
        return `${name} ILIKE ${replacement} ESCAPE '${escape}'`
      }
      if (OpBetween in filter) {
        const { symmetric } = filter[OpBetween]
        const replacementStart = this._getReplacement(filter, OpBetween, 'start')
        const replacementEnd = this._getReplacement(filter, OpBetween, 'end')
        return compose([
          name,
          'BETWEEN',
          symmetric && 'SYMMETRIC',
          replacementStart,
          'AND',
          replacementEnd,
        ])
      }
      if (OpRaw in filter) {
        return `${name} ${filter[OpRaw]}`
      }
    }

    throw new Error('Invalid condition, OHNO')
  }

  _buildCondition(
    condition: WhereConditionNormalized | WhereConditionItemNormalized,
    level: number = 0
  ): string {
    if (this._isNested(condition)) return this._buildNestedCondition(condition, level)

    if (Array.isArray(condition)) {
      const fields = condition.reduce((acc, item) => {
        if (item.filter === undefined || item.filter === Skip) return acc
        const sql = this._buildConditionItem(item, level)
        if (sql) acc.push(sql)
        return acc
      }, [] as string[])

      if (!fields.length) return ''
      if (fields.length === 1) return fields[0]
      if (level > 0) return parenthesis(fields.join(' AND '))

      return fields.join(' AND ')
    }

    return this._buildConditionItem(condition, level)
  }

  toSQL() {
    const sql = this._buildCondition(this._conditionNormalized)
    if (!sql) return ''
    return compose(['WHERE', sql])
  }

  clone(builder: Builder) {
    return new WhereBuilder(builder, this._condition)
  }
}

type GroupByModifier = 'ALL' | 'DISTINCT'
type GroupByInput = {
  modifier?: GroupByModifier
  fields: string[]
}

export class GroupByBuilder extends BuilderBase implements BuilderInterface {
  _input: GroupByInput

  constructor(builder: Builder, input: GroupByInput) {
    super(builder)
    this._input = input
  }

  having() {
    return this
  }

  orderBy(orderByInput: OrderByInput) {
    return new OrderByBuilder(this.builder, orderByInput)
  }

  limit(count: number) {
    return new LimitBuilder(this.builder, count)
  }

  offset(start: number, mode: 'ROW' | 'ROWS') {
    return new OffsetBuilder(this.builder, start, mode)
  }

  raw(rawSql: string) {
    new RawBuilder(this.builder, rawSql)
    return this
  }

  toSQL() {
    const { modifier, fields } = this._input
    return compose(['GROUP BY', modifier, list(fields.map(escapeName))])
  }

  clone(builder: Builder) {
    return new GroupByBuilder(builder, this._input)
  }
}

export class HavingBuilder extends BuilderBase implements BuilderInterface {
  constructor(builder: Builder) {
    super(builder)
  }

  orderBy(orderByInput: OrderByInput) {
    return new OrderByBuilder(this.builder, orderByInput)
  }

  limit(count: number) {
    return new LimitBuilder(this.builder, count)
  }

  offset(start: number, mode: 'ROW' | 'ROWS') {
    return new OffsetBuilder(this.builder, start, mode)
  }

  raw(rawSql: string) {
    new RawBuilder(this.builder, rawSql)
    return this
  }

  toSQL() {
    return ''
  }

  clone(builder: Builder) {
    return new HavingBuilder(builder)
  }
}

type OrderByItem = {
  field: string
  order?: 'ASC' | 'DESC' | 'USING'
  using?: string
  nulls?: 'FIRST' | 'LAST'
}
type OrderByInput = OrderByItem | OrderByItem[]
type OrderByInputNormalized = OrderByItem[]

export class OrderByBuilder extends BuilderBase implements BuilderInterface {
  _input: OrderByInputNormalized

  constructor(builder: Builder, input: OrderByInput) {
    super(builder)
    this._input = Array.isArray(input) ? input : [input]
  }

  limit(count: number) {
    return new LimitBuilder(this.builder, count)
  }

  offset(start: number, mode: 'ROW' | 'ROWS') {
    return new OffsetBuilder(this.builder, start, mode)
  }

  raw(rawSql: string) {
    new RawBuilder(this.builder, rawSql)
    return this
  }

  toSQL() {
    return compose([
      'ORDER BY',
      list(
        this._input.map(({ field, order, using, nulls }) =>
          compose([field, order, order === 'USING' && using, nulls && `NULLS ${nulls}`])
        )
      ),
    ])
  }

  clone() {
    return new OrderByBuilder(this.builder, this._input)
  }
}

export class LimitBuilder extends BuilderBase implements BuilderInterface {
  _count: number

  constructor(builder: Builder, count: number) {
    super(builder)
    this._count = count
  }

  offset(start: number, mode?: 'ROW' | 'ROWS') {
    return new OffsetBuilder(this.builder, start, mode)
  }

  raw(rawSql: string) {
    new RawBuilder(this.builder, rawSql)
    return this
  }

  toSQL() {
    const replacement = this.builder._addReplacement(this._count)
    return `LIMIT ${replacement}`
  }

  clone() {
    return new LimitBuilder(this.builder, this._count)
  }
}

export class OffsetBuilder extends BuilderBase implements BuilderInterface {
  _start: number
  _mode?: 'ROW' | 'ROWS'

  constructor(builder: Builder, start: number, mode?: 'ROW' | 'ROWS') {
    super(builder)
    this._start = start
    this._mode = mode
  }

  raw(rawSql: string) {
    new RawBuilder(this.builder, rawSql)
    return this
  }

  toSQL() {
    const replacement = this.builder._addReplacement(this._start)
    return compose(['OFFSET', replacement, this._mode])
  }

  clone(builder: Builder) {
    return new OffsetBuilder(builder, this._start, this._mode)
  }
}

export class RawBuilder extends BuilderBase implements BuilderInterface {
  _rawSql: string

  constructor(builder: Builder, rawSql: string) {
    super(builder)
    this._rawSql = rawSql
  }

  toSQL() {
    return this._rawSql
  }

  clone(builder: Builder) {
    return new RawBuilder(builder, this._rawSql)
  }
}

export class ReplaceByName {
  _name: string

  constructor(name: string) {
    this._name = name
  }
}

export const REPLACE_BY_NUMBER = Symbol('$')

export class BuilderError extends Error {}

export type BuilderOptions = {
  steps?: BuilderInterface[]
  replacements?: unknown[]
  comment?: string
  parentBuilder?: Builder
}

export class Builder {
  _steps: BuilderInterface[] = []
  _replacements: unknown[] = []
  _comment?: string
  _parentBuilder?: Builder

  constructor(builder?: Builder) {
    if (builder) {
      this._steps = builder._steps.map((step) => {
        console.log(step)
        return step.clone(this)
      })
      this._replacements = builder._replacements
      this._comment = builder._comment
      this._parentBuilder = builder._parentBuilder
    }
  }

  static query() {
    return new Builder()
  }

  static select(fields: string[]) {
    return new SelectBuilder(new Builder(), fields)
  }

  static $$(name: string) {
    return new ReplaceByName(name)
  }

  // TODO: Allow to access the created steps, so we can change the selected fields for example after clone()

  get $() {
    return REPLACE_BY_NUMBER
  }

  comment(comment: string) {
    this._comment = comment
  }

  select(fields: SelectField[], mapping?: SelectFieldMapping) {
    return new SelectBuilder(this, fields, mapping)
  }

  with(withQuery: WithQueryInput) {
    return new WithBuilder(this, withQuery)
  }

  raw(rawSql: string) {
    new RawBuilder(this, rawSql)
    return this
  }

  toSQL() {
    if (!this.isValid()) throw new BuilderError('Invalid query.')
    return compose([this._comment, ...this._steps.map((step) => step.toSQL())], '\n')
  }

  getReplacements() {
    // TODO: Symbols, Replacement ?
    return this._replacements
  }

  output() {
    return {
      sql: this.toSQL(),
      replacements: this.getReplacements(),
    }
  }

  clone() {
    return new Builder(this)
  }

  isValid() {
    return this._steps.some((step) => step instanceof FromBuilder)
  }

  toString(): string {
    return this._steps.map((step) => step.toSQL()).join('\n')
  }

  _addReplacement(replacement: unknown) {
    if (this._parentBuilder) {
      return this._parentBuilder._addReplacement(replacement)
    }
    this._replacements.push(replacement)
    return `$${this._replacements.length}`
  }

  _add(step: BuilderInterface) {
    this._steps.push(step)
  }
}

export function query() {
  return Builder.query()
}

export function select(fields: string[]) {
  return Builder.select(fields)
}

export function fn(name: string, args?: FunctionFragmentArg[]) {
  return new FunctionFragment(name, args)
}

export function col(name: string) {
  return new ColumnFragment(name)
}

export function raw(sql: string) {
  return new RawFragment(sql)
}
