import { BuilderBase } from '../builder-base'
import { BuilderInterface } from '../builder-interface'
import { compose, list, escapeName } from '../utils'
import { Builder } from './builder'
import { LimitBuilder } from './limit-builder'
import { OffsetBuilder } from './offset-builder'
import { OrderByInput, OrderByBuilder } from './order-by-builder'
import { RawBuilder } from './raw-builder'

export type GroupByModifier = 'ALL' | 'DISTINCT'
export type GroupByInput = {
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
