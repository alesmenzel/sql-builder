---
id: "LimitBuilder"
title: "Class: LimitBuilder"
sidebar_label: "LimitBuilder"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BuilderBase`

  ↳ **`LimitBuilder`**

## Implements

- `BuilderInterface`

## Constructors

### constructor

• **new LimitBuilder**(`builder`, `count`): [`LimitBuilder`](LimitBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |
| `count` | `number` |

#### Returns

[`LimitBuilder`](LimitBuilder.md)

#### Overrides

BuilderBase.constructor

#### Defined in

src/sql-builder.ts:993

## Properties

### \_count

• **\_count**: `number`

#### Defined in

src/sql-builder.ts:991

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

src/sql-builder.ts:49

## Methods

### clone

▸ **clone**(): [`LimitBuilder`](LimitBuilder.md)

#### Returns

[`LimitBuilder`](LimitBuilder.md)

#### Implementation of

BuilderInterface.clone

#### Overrides

BuilderBase.clone

#### Defined in

src/sql-builder.ts:1012

___

### offset

▸ **offset**(`start`, `mode?`): [`OffsetBuilder`](OffsetBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `mode?` | ``"ROW"`` \| ``"ROWS"`` |

#### Returns

[`OffsetBuilder`](OffsetBuilder.md)

#### Defined in

src/sql-builder.ts:998

___

### raw

▸ **raw**(`rawSql`): [`LimitBuilder`](LimitBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawSql` | `string` |

#### Returns

[`LimitBuilder`](LimitBuilder.md)

#### Defined in

src/sql-builder.ts:1002

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

src/sql-builder.ts:1007
