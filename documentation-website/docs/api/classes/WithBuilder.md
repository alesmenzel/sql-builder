---
id: "WithBuilder"
title: "Class: WithBuilder"
sidebar_label: "WithBuilder"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BuilderBase`

  ↳ **`WithBuilder`**

## Implements

- `BuilderInterface`

## Constructors

### constructor

• **new WithBuilder**(`builder`, `withQuery`): [`WithBuilder`](WithBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |
| `withQuery` | [`WithQueryInput`](../modules.md#withqueryinput) |

#### Returns

[`WithBuilder`](WithBuilder.md)

#### Overrides

BuilderBase.constructor

#### Defined in

src/sql-builder.ts:76

## Properties

### \_withQueries

• **\_withQueries**: [`WithQuery`](../modules.md#withquery)[]

#### Defined in

src/sql-builder.ts:74

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

src/sql-builder.ts:49

## Methods

### clone

▸ **clone**(`builder`): [`WithBuilder`](WithBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |

#### Returns

[`WithBuilder`](WithBuilder.md)

#### Implementation of

BuilderInterface.clone

#### Overrides

BuilderBase.clone

#### Defined in

src/sql-builder.ts:108

___

### raw

▸ **raw**(`rawSql`): [`WithBuilder`](WithBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawSql` | `string` |

#### Returns

[`WithBuilder`](WithBuilder.md)

#### Defined in

src/sql-builder.ts:89

___

### select

▸ **select**(`fields`): [`SelectBuilder`](SelectBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `string`[] |

#### Returns

[`SelectBuilder`](SelectBuilder.md)

#### Defined in

src/sql-builder.ts:85

___

### toSQL

▸ **toSQL**(): `string`

#### Returns

`string`

#### Implementation of

BuilderInterface.toSQL

#### Overrides

BuilderBase.toSQL

#### Defined in

src/sql-builder.ts:94
