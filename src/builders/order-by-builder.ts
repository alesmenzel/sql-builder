import { BuilderBase } from '../builder-base'
import { BuilderInterface } from '../builder-interface'
import { compose, list } from '../utils'
import { Builder } from './builder'
import { LimitBuilder } from './limit-builder'
import { OffsetBuilder } from './offset-builder'
import { RawBuilder } from './raw-builder'

export type OrderByItem = {
  field: string
  order?: 'ASC' | 'DESC' | 'USING'
  using?: string
  nulls?: 'FIRST' | 'LAST'
}
export type OrderByInput = OrderByItem | OrderByItem[]
export type OrderByInputNormalized = OrderByItem[]

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
