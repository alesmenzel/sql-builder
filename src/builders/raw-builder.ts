import { BuilderBase } from '../builder-base'
import { BuilderInterface } from '../builder-interface'
import { Builder } from './builder'

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
