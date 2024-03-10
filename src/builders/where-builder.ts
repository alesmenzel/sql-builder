import { BuilderBase } from '../builder-base'
import { BuilderInterface } from '../builder-interface'
import {
  REPLACE_BY_NUMBER,
  ReplaceByName,
  Skip,
  OpOr,
  OpAnd,
  OpNot,
  OpEq,
  OpNeq,
  OpLike,
  OpILike,
  OpIn,
  OpAny,
  OpSome,
  OpAll,
  OpBetween,
  OpGt,
  OpGte,
  OpLt,
  OpLte,
  OpRaw,
  BuilderError,
  DEFAULT_LIKE_ESCAPE,
} from '../constants'
import { ColumnFragment } from '../fragments/column-fragment'
import { FunctionFragment } from '../fragments/function-fragment'
import { RawFragment } from '../fragments/raw-fragment'
import { escapeName, parenthesis, compose, escapeLike } from '../utils'
import { Builder } from './builder'
import { GroupByBuilder, GroupByInput } from './group-by-builder'
import { LimitBuilder } from './limit-builder'
import { OffsetBuilder } from './offset-builder'
import { OrderByBuilder, OrderByInput } from './order-by-builder'
import { RawBuilder } from './raw-builder'

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
