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

[src/builders/offset-builder.ts:11](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/offset-builder.ts#L11)

## Properties

### \_mode

• `Optional` **\_mode**: ``"ROW"`` \| ``"ROWS"``

#### Defined in

[src/builders/offset-builder.ts:9](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/offset-builder.ts#L9)

___

### \_start

• **\_start**: `number`

#### Defined in

[src/builders/offset-builder.ts:8](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/offset-builder.ts#L8)

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

[src/builder-base.ts:5](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builder-base.ts#L5)

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

[src/builders/offset-builder.ts:27](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/offset-builder.ts#L27)

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

[src/builders/offset-builder.ts:17](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/offset-builder.ts#L17)

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

[src/builders/offset-builder.ts:22](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/builders/offset-builder.ts#L22)
