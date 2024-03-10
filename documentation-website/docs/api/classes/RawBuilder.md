---
id: "RawBuilder"
title: "Class: RawBuilder"
sidebar_label: "RawBuilder"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BuilderBase`

  ↳ **`RawBuilder`**

## Implements

- `BuilderInterface`

## Constructors

### constructor

• **new RawBuilder**(`builder`, `rawSql`): [`RawBuilder`](RawBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |
| `rawSql` | `string` |

#### Returns

[`RawBuilder`](RawBuilder.md)

#### Overrides

BuilderBase.constructor

#### Defined in

[src/sql-builder.ts:1045](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L1045)

## Properties

### \_rawSql

• **\_rawSql**: `string`

#### Defined in

[src/sql-builder.ts:1043](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L1043)

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

[src/sql-builder.ts:49](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L49)

## Methods

### clone

▸ **clone**(`builder`): [`RawBuilder`](RawBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |

#### Returns

[`RawBuilder`](RawBuilder.md)

#### Implementation of

BuilderInterface.clone

#### Overrides

BuilderBase.clone

#### Defined in

[src/sql-builder.ts:1054](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L1054)

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

[src/sql-builder.ts:1050](https://github.com/alesmenzel/sql-builder/blob/017ca38/src/sql-builder.ts#L1050)
