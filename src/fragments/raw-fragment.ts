import { type Builder } from '../builders/builder'
import { type FragmentInterface } from './fragment-types'

export class RawFragment implements FragmentInterface {
  _sql: string

  constructor(sql: string) {
    this._sql = sql
  }

  toSQL(_builder: Builder) {
    return this._sql
  }
}
