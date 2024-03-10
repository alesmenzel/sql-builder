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

[src/builders/from-builder.ts:23](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L23)

## Properties

### \_fromItem

• **\_fromItem**: [`FromItemNormalized`](../modules.md#fromitemnormalized)

#### Defined in

[src/builders/from-builder.ts:20](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L20)

___

### \_fromJoin

• `Optional` **\_fromJoin**: [`FromJoin`](../modules.md#fromjoin)

#### Defined in

[src/builders/from-builder.ts:21](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L21)

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

[src/builder-base.ts:5](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builder-base.ts#L5)

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

[src/builders/from-builder.ts:83](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L83)

___

### groupBy

▸ **groupBy**(`groupByInput`): [`GroupByBuilder`](GroupByBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupByInput` | [`GroupByInput`](../modules.md#groupbyinput) |

#### Returns

[`GroupByBuilder`](GroupByBuilder.md)

#### Defined in

[src/builders/from-builder.ts:34](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L34)

___

### having

▸ **having**(): [`FromBuilder`](FromBuilder.md)

#### Returns

[`FromBuilder`](FromBuilder.md)

#### Defined in

[src/builders/from-builder.ts:38](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L38)

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

[src/builders/from-builder.ts:46](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L46)

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

[src/builders/from-builder.ts:50](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L50)

___

### orderBy

▸ **orderBy**(`orderByInput`): [`OrderByBuilder`](OrderByBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `orderByInput` | [`OrderByInput`](../modules.md#orderbyinput) |

#### Returns

[`OrderByBuilder`](OrderByBuilder.md)

#### Defined in

[src/builders/from-builder.ts:42](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L42)

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

[src/builders/from-builder.ts:54](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L54)

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

[src/builders/from-builder.ts:59](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L59)

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

[src/builders/from-builder.ts:30](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/from-builder.ts#L30)
