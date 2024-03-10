---
id: "FromBuilder"
title: "Class: FromBuilder"
sidebar_label: "FromBuilder"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BuilderBase`

  ↳ **`FromBuilder`**

## Implements

- `BuilderInterface`

## Constructors

### constructor

• **new FromBuilder**(`builder`, `fromItem`, `fromJoin?`): [`FromBuilder`](FromBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |
| `fromItem` | [`FromItem`](../modules.md#fromitem) |
| `fromJoin?` | [`FromJoin`](../modules.md#fromjoin) |

#### Returns

[`FromBuilder`](FromBuilder.md)

#### Overrides

BuilderBase.constructor

#### Defined in

src/sql-builder.ts:227

## Properties

### \_fromItem

• **\_fromItem**: [`FromItemNormalized`](../modules.md#fromitemnormalized)

#### Defined in

src/sql-builder.ts:224

___

### \_fromJoin

• `Optional` **\_fromJoin**: [`FromJoin`](../modules.md#fromjoin)

#### Defined in

src/sql-builder.ts:225

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

src/sql-builder.ts:49

## Methods

### clone

▸ **clone**(`builder`): [`FromBuilder`](FromBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |

#### Returns

[`FromBuilder`](FromBuilder.md)

#### Implementation of

BuilderInterface.clone

#### Overrides

BuilderBase.clone

#### Defined in

src/sql-builder.ts:287

___

### groupBy

▸ **groupBy**(`groupByInput`): [`GroupByBuilder`](GroupByBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupByInput` | `GroupByInput` |

#### Returns

[`GroupByBuilder`](GroupByBuilder.md)

#### Defined in

src/sql-builder.ts:238

___

### having

▸ **having**(): [`FromBuilder`](FromBuilder.md)

#### Returns

[`FromBuilder`](FromBuilder.md)

#### Defined in

src/sql-builder.ts:242

___

### limit

▸ **limit**(`count`): [`LimitBuilder`](LimitBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`LimitBuilder`](LimitBuilder.md)

#### Defined in

src/sql-builder.ts:250

___

### offset

▸ **offset**(`start`, `mode`): [`OffsetBuilder`](OffsetBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `mode` | ``"ROW"`` \| ``"ROWS"`` |

#### Returns

[`OffsetBuilder`](OffsetBuilder.md)

#### Defined in

src/sql-builder.ts:254

___

### orderBy

▸ **orderBy**(`orderByInput`): [`OrderByBuilder`](OrderByBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `orderByInput` | `OrderByInput` |

#### Returns

[`OrderByBuilder`](OrderByBuilder.md)

#### Defined in

src/sql-builder.ts:246

___

### raw

▸ **raw**(`rawSql`): [`FromBuilder`](FromBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawSql` | `string` |

#### Returns

[`FromBuilder`](FromBuilder.md)

#### Defined in

src/sql-builder.ts:258

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

src/sql-builder.ts:263

___

### where

▸ **where**(`conditions`): [`WhereBuilder`](WhereBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `conditions` | [`WhereCondition`](../modules.md#wherecondition) |

#### Returns

[`WhereBuilder`](WhereBuilder.md)

#### Defined in

src/sql-builder.ts:234