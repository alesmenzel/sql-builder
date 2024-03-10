import { BuilderInterface } from '../builder-interface'
import { ReplaceByName, REPLACE_BY_NUMBER, BuilderError } from '../constants'
import { compose } from '../utils'
import { FromBuilder } from './from-builder'
import { RawBuilder } from './raw-builder'
import { SelectBuilder, SelectField, SelectFieldMapping } from './select-builder'
import { WithQueryInput, WithBuilder } from './with-builder'

export type BuilderOptions = {
  steps?: BuilderInterface[]
  replacements?: unknown[]
  comment?: string
  parentBuilder?: Builder
}

export class Builder {
  _steps: BuilderInterface[] = []
  _replacements: unknown[] = []
  _comment?: string
  _parentBuilder?: Builder

  constructor(builder?: Builder) {
    if (builder) {
      this._steps = builder._steps.map((step) => {
        console.log(step)
        return step.clone(this)
      })
      this._replacements = builder._replacements
      this._comment = builder._comment
      this._parentBuilder = builder._parentBuilder
    }
  }

  static query() {
    return new Builder()
  }

  static select(fields: string[]) {
    return new SelectBuilder(new Builder(), fields)
  }

  static $$(name: string) {
    return new ReplaceByName(name)
  }

  // TODO: Allow to access the created steps, so we can change the selected fields for example after clone()

  get $() {
    return REPLACE_BY_NUMBER
  }

  comment(comment: string) {
    this._comment = comment
  }

  select(fields: SelectField[], mapping?: SelectFieldMapping) {
    return new SelectBuilder(this, fields, mapping)
  }

  with(withQuery: WithQueryInput) {
    return new WithBuilder(this, withQuery)
  }

  raw(rawSql: string) {
    new RawBuilder(this, rawSql)
    return this
  }

  toSQL() {
    if (!this.isValid()) throw new BuilderError('Invalid query.')
    return compose([this._comment, ...this._steps.map((step) => step.toSQL())], '\n')
  }

  getReplacements() {
    // TODO: Symbols, Replacement ?
    return this._replacements
  }

  output() {
    return {
      sql: this.toSQL(),
      replacements: this.getReplacements(),
    }
  }

  clone() {
    return new Builder(this)
  }

  isValid() {
    return this._steps.some((step) => step instanceof FromBuilder)
  }

  toString(): string {
    return this._steps.map((step) => step.toSQL()).join('\n')
  }

  _addReplacement(replacement: unknown) {
    if (this._parentBuilder) {
      return this._parentBuilder._addReplacement(replacement)
    }
    this._replacements.push(replacement)
    return `$${this._replacements.length}`
  }

  _add(step: BuilderInterface) {
    this._steps.push(step)
  }
}
