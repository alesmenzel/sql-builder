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

[src/builders/with-builder.ts:19](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/with-builder.ts#L19)

## Properties

### \_withQueries

• **\_withQueries**: [`WithQuery`](../modules.md#withquery)[]

#### Defined in

[src/builders/with-builder.ts:17](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/with-builder.ts#L17)

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

[src/builder-base.ts:5](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builder-base.ts#L5)

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

[src/builders/with-builder.ts:51](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/with-builder.ts#L51)

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

[src/builders/with-builder.ts:32](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/with-builder.ts#L32)

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

[src/builders/with-builder.ts:28](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/with-builder.ts#L28)

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

[src/builders/with-builder.ts:37](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/with-builder.ts#L37)
