import { BuilderBase } from '../builder-base'
import { BuilderInterface } from '../builder-interface'
import { compose, parenthesis, escapeName } from '../utils'
import { Builder } from './builder'
import { GroupByBuilder, GroupByInput } from './group-by-builder'
import { JoinBuilder } from './join-builder'
import { LimitBuilder } from './limit-builder'
import { OffsetBuilder } from './offset-builder'
import { OrderByInput, OrderByBuilder } from './order-by-builder'
import { RawBuilder } from './raw-builder'
import { WhereCondition, WhereBuilder } from './where-builder'

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
