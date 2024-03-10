---
id: "SelectBuilder"
title: "Class: SelectBuilder"
sidebar_label: "SelectBuilder"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BuilderBase`

  ↳ **`SelectBuilder`**

## Implements

- `BuilderInterface`

## Constructors

### constructor

• **new SelectBuilder**(`builder`, `fields`, `mapping?`): [`SelectBuilder`](SelectBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |
| `fields` | [`SelectField`](../modules.md#selectfield)[] |
| `mapping?` | [`SelectFieldMapping`](../modules.md#selectfieldmapping) |

#### Returns

[`SelectBuilder`](SelectBuilder.md)

#### Overrides

BuilderBase.constructor

#### Defined in

src/sql-builder.ts:123

## Properties

### \_fields

• **\_fields**: [`SelectFieldNormalized`](../modules.md#selectfieldnormalized)[]

#### Defined in

src/sql-builder.ts:120

___

### \_mapping

• **\_mapping**: [`SelectFieldMapping`](../modules.md#selectfieldmapping)

#### Defined in

src/sql-builder.ts:121

___

### builder

• **builder**: [`Builder`](Builder.md)

#### Inherited from

BuilderBase.builder

#### Defined in

src/sql-builder.ts:49

## Methods

### clone

▸ **clone**(`builder`): [`SelectBuilder`](SelectBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`Builder`](Builder.md) |

#### Returns

[`SelectBuilder`](SelectBuilder.md)

#### Implementation of

BuilderInterface.clone

#### Overrides

BuilderBase.clone

#### Defined in

src/sql-builder.ts:158

___

### from

▸ **from**(`fromItem`, `fromJoin?`): [`FromBuilder`](FromBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromItem` | [`FromItem`](../modules.md#fromitem) |
| `fromJoin?` | [`FromJoin`](../modules.md#fromjoin) |

#### Returns

[`FromBuilder`](FromBuilder.md)

#### Defined in

src/sql-builder.ts:137

___

### raw

▸ **raw**(`rawSql`): [`SelectBuilder`](SelectBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawSql` | `string` |

#### Returns

[`SelectBuilder`](SelectBuilder.md)

#### Defined in

src/sql-builder.ts:141

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

src/sql-builder.ts:146