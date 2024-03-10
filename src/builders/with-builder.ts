import { BuilderBase } from '../builder-base'
import { BuilderInterface } from '../builder-interface'
import { list, compose, escapeName, parenthesis } from '../utils'
import { Builder } from './builder'
import { RawBuilder } from './raw-builder'
import { SelectBuilder } from './select-builder'

export type WithQuery = {
  queryName: string
  alias: string
  columns?: string[]
  builder: Builder
}
export type WithQueryInput = WithQuery | WithQuery[]

export class WithBuilder extends BuilderBase implements BuilderInterface {
  _withQueries: WithQuery[]

  constructor(builder: Builder, withQuery: WithQueryInput) {
    super(builder)
    this._withQueries = Array.isArray(withQuery) ? withQuery : [withQuery]

    for (const withQuery of this._withQueries) {
      withQuery.builder._parentBuilder = builder
    }
  }

  select(fields: string[]) {
    return new SelectBuilder(this.builder, fields)
  }

  raw(rawSql: string) {
    new RawBuilder(this.builder, rawSql)
    return this
  }

  toSQL() {
    return `WITH ${list(
      this._withQueries.map(({ queryName, columns, alias, builder }) =>
        compose([
          escapeName(queryName),
          columns && parenthesis(columns.map(escapeName).join(', ')),
          'AS',
          escapeName(alias),
          parenthesis(builder.toSQL()),
        ])
      )
    )}`
  }

  clone(builder: Builder) {
    return new WithBuilder(builder, this._withQueries)
  }
}
