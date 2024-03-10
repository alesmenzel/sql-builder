import { Builder } from './builders/builder'
import { ColumnFragment } from './fragments/column-fragment'
import { FunctionFragmentArg, FunctionFragment } from './fragments/function-fragment'
import { RawFragment } from './fragments/raw-fragment'

export function query() {
  return Builder.query()
}

export function select(fields: string[]) {
  return Builder.select(fields)
}

export function fn(name: string, args?: FunctionFragmentArg[]) {
  return new FunctionFragment(name, args)
}

export function col(name: string) {
  return new ColumnFragment(name)
}

export function raw(sql: string) {
  return new RawFragment(sql)
}

export * from './constants'
export * from './utils'
export * from './builders/builder'
export * from './builders/with-builder'
export * from './builders/select-builder'
export * from './builders/join-builder'
export * from './builders/from-builder'
export * from './builders/where-builder'
export * from './builders/order-by-builder'
export * from './builders/having-builder'
export * from './builders/group-by-builder'
export * from './builders/limit-builder'
export * from './builders/offset-builder'
export * from './fragments/column-fragment'
export * from './fragments/fragment-types'
export * from './fragments/function-fragment'
export * from './fragments/raw-fragment'
