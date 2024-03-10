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

src/sql-builder.ts:1021

## Properties

### \_mode

• `Optional` **\_mode**: ``"ROW"`` \| ``"ROWS"``

#### Defined in

src/sql-builder.ts:1019

___

### \_start

• **\_start**: `number`

#### Defined in

src/sql-builder.ts:1018

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

src/sql-builder.ts:49

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

src/sql-builder.ts:1037

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

src/sql-builder.ts:1027

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

src/sql-builder.ts:1032
