---
id: "GroupByBuilder"
title: "Class: GroupByBuilder"
sidebar_label: "GroupByBuilder"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BuilderBase`

  ↳ **`GroupByBuilder`**

## Implements

- `BuilderInterface`

## Constructors

### constructor

• **new GroupByBuilder**(`builder`, `input`): [`GroupByBuilder`](GroupByBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |
| `input` | [`GroupByInput`](../modules.md#groupbyinput) |

#### Returns

[`GroupByBuilder`](GroupByBuilder.md)

#### Overrides

BuilderBase.constructor

#### Defined in

[src/builders/group-by-builder.ts:19](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/group-by-builder.ts#L19)

## Properties

### \_input

• **\_input**: [`GroupByInput`](../modules.md#groupbyinput)

#### Defined in

[src/builders/group-by-builder.ts:17](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/group-by-builder.ts#L17)

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

[src/builder-base.ts:5](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builder-base.ts#L5)

## Methods

### clone

▸ **clone**(`builder`): [`GroupByBuilder`](GroupByBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |

#### Returns

[`GroupByBuilder`](GroupByBuilder.md)

#### Implementation of

BuilderInterface.clone

#### Overrides

BuilderBase.clone

#### Defined in

[src/builders/group-by-builder.ts:50](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/group-by-builder.ts#L50)

___

### having

▸ **having**(): [`GroupByBuilder`](GroupByBuilder.md)

#### Returns

[`GroupByBuilder`](GroupByBuilder.md)

#### Defined in

[src/builders/group-by-builder.ts:24](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/group-by-builder.ts#L24)

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

[src/builders/group-by-builder.ts:32](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/group-by-builder.ts#L32)

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

[src/builders/group-by-builder.ts:36](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/group-by-builder.ts#L36)

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

[src/builders/group-by-builder.ts:28](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/group-by-builder.ts#L28)

___

### raw

▸ **raw**(`rawSql`): [`GroupByBuilder`](GroupByBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawSql` | `string` |

#### Returns

[`GroupByBuilder`](GroupByBuilder.md)

#### Defined in

[src/builders/group-by-builder.ts:40](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/group-by-builder.ts#L40)

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

[src/builders/group-by-builder.ts:45](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/group-by-builder.ts#L45)
