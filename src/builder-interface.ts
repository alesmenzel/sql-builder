import { type Builder } from './builders/builder'

export interface BuilderInterface {
  toSQL(): string
  clone(builder: Builder): BuilderInterface
}
