import { BuilderBase } from '../builder-base'
import { BuilderInterface } from '../builder-interface'
import { Builder } from './builder'
import { LimitBuilder } from './limit-builder'
import { OffsetBuilder } from './offset-builder'
import { OrderByInput, OrderByBuilder } from './order-by-builder'
import { RawBuilder } from './raw-builder'

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
