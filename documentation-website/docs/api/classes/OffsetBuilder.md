---
id: "OffsetBuilder"
title: "Class: OffsetBuilder"
sidebar_label: "OffsetBuilder"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BuilderBase`

  ↳ **`OffsetBuilder`**

## Implements

- `BuilderInterface`

## Constructors

### constructor

• **new OffsetBuilder**(`builder`, `start`, `mode?`): [`OffsetBuilder`](OffsetBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |
| `start` | `number` |
| `mode?` | ``"ROW"`` \| ``"ROWS"`` |

#### Returns

[`OffsetBuilder`](OffsetBuilder.md)

#### Overrides

BuilderBase.constructor

#### Defined in

[src/sql-builder.ts:1021](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L1021)

## Properties

### \_mode

• `Optional` **\_mode**: ``"ROW"`` \| ``"ROWS"``

#### Defined in

[src/sql-builder.ts:1019](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L1019)

___

### \_start

• **\_start**: `number`

#### Defined in

[src/sql-builder.ts:1018](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L1018)

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

[src/sql-builder.ts:49](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L49)

## Methods

### clone

▸ **clone**(`builder`): [`OffsetBuilder`](OffsetBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |

#### Returns

[`OffsetBuilder`](OffsetBuilder.md)

#### Implementation of

BuilderInterface.clone

#### Overrides

BuilderBase.clone

#### Defined in

[src/sql-builder.ts:1037](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L1037)

___

### raw

▸ **raw**(`rawSql`): [`OffsetBuilder`](OffsetBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawSql` | `string` |

#### Returns

[`OffsetBuilder`](OffsetBuilder.md)

#### Defined in

[src/sql-builder.ts:1027](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L1027)

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

[src/sql-builder.ts:1032](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L1032)
