import { type BuilderInterface } from './builder-interface'
import { type Builder } from './sql-builder'

export class BuilderBase implements BuilderInterface {
  builder: Builder

  constructor(builder: Builder) {
    this.builder = builder
    builder._add(this)
  }

  clone(_builder: Builder): BuilderInterface {
    throw new Error('Must be implemented in child class.')
  }

  toSQL(): string {
    throw new Error('Must be implemented in child class.')
  }
}
