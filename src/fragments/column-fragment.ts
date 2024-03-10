import { type Builder } from '../builders/builder'
import { escapeName } from '../utils'
import { type FragmentInterface } from './fragment-types'

export class ColumnFragment implements FragmentInterface {
  _name: string

  constructor(name: string) {
    this._name = name
  }

  toSQL(_builder: Builder) {
    return `${escapeName(this._name)}`
  }
}
