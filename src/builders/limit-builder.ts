import { BuilderBase } from '../builder-base'
import { BuilderInterface } from '../builder-interface'
import { Builder } from './builder'
import { OffsetBuilder } from './offset-builder'
import { RawBuilder } from './raw-builder'

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
