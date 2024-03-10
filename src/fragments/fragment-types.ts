import { type Builder } from '../builders/builder'

export interface FragmentInterface {
  toSQL(builder: Builder): string
}
