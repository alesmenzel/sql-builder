import { type Builder } from '../builders/builder'
import { list, escapeName } from '../utils'
import { ColumnFragment } from './column-fragment'
import { type FragmentInterface } from './fragment-types'
import { RawFragment } from './raw-fragment'

export type FunctionFragmentArg =
  | string
  | number
  | boolean
  | Date
  | { value: string; escape?: boolean }
  | FunctionFragment
  | ColumnFragment
  | RawFragment

export class FunctionFragment implements FragmentInterface {
  _name: string
  _args: FunctionFragmentArg[]

  constructor(name: string, args: FunctionFragmentArg[] = []) {
    this._name = name
    this._args = args
  }

  toSQL(builder: Builder) {
    return `${this._name}(${list(
      this._args.map((arg) => {
        if (arg instanceof FunctionFragment) return arg.toSQL(builder)
        if (arg instanceof ColumnFragment) return arg.toSQL(builder)
        if (arg instanceof RawFragment) return arg.toSQL(builder)
        if (typeof arg === 'object' && !(arg instanceof Date)) {
          return arg.escape ? escapeName(arg.value) : arg.value
        }
        return builder._addReplacement(arg)
      })
    )})`
  }
}
