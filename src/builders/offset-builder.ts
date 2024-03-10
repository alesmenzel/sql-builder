import { BuilderBase } from '../builder-base'
import { BuilderInterface } from '../builder-interface'
import { compose } from '../utils'
import { Builder } from './builder'
import { RawBuilder } from './raw-builder'

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
