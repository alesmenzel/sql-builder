import { BuilderError } from './constants'

export function escapeName(name: string) {
  return name
    .replace(/"/g, '')
    .split('.')
    .map((part) => `"${part}"`)
    .join('.')
}

export function escapeLike(value: string, escape: string) {
  if (escape.length !== 1) {
    throw new BuilderError(`Escape character must be exactly 1 character long, give: ${escape}`)
  }
  return `${value.replace(new RegExp(`[${escape}]`, 'g'), escape.repeat(2))}`
}

export function ifset(value: string) {
  if (value) return value
  return ''
}

export function parenthesis(value: string, count?: number) {
  if (count != null && count === 1) return value
  return `(${value})`
}

export function castAs(field: string, type: string) {
  return `${field}::${type}`
}

export function compose(
  items: (string | undefined | null | false | number | boolean)[],
  separator: string = ' '
): string {
  return (items.filter(Boolean) as string[]).join(separator)
}

export function list(values: string[]) {
  return values.join(', ')
}
