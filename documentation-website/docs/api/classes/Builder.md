---
id: "Builder"
title: "Class: Builder"
sidebar_label: "Builder"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Builder**(`builder?`): [`Builder`](Builder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder?` | [`Builder`](Builder.md) |

#### Returns

[`Builder`](Builder.md)

#### Defined in

src/sql-builder.ts:1084

## Properties

### \_comment

• `Optional` **\_comment**: `string`

#### Defined in

src/sql-builder.ts:1081

___

### \_parentBuilder

• `Optional` **\_parentBuilder**: [`Builder`](Builder.md)

#### Defined in

src/sql-builder.ts:1082

___

### \_replacements

• **\_replacements**: `unknown`[] = `[]`

#### Defined in

src/sql-builder.ts:1080

___

### \_steps

• **\_steps**: `BuilderInterface`[] = `[]`

#### Defined in

src/sql-builder.ts:1079

## Accessors

### $

• `get` **$**(): `symbol`

#### Returns

`symbol`

#### Defined in

src/sql-builder.ts:1110

## Methods

### \_add

▸ **_add**(`step`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | `BuilderInterface` |

#### Returns

`void`

#### Defined in

src/sql-builder.ts:1168

___

### \_addReplacement

▸ **_addReplacement**(`replacement`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `replacement` | `unknown` |

#### Returns

`any`

#### Defined in

src/sql-builder.ts:1160

___

### clone

▸ **clone**(): [`Builder`](Builder.md)

#### Returns

[`Builder`](Builder.md)

#### Defined in

src/sql-builder.ts:1148

___

### comment

▸ **comment**(`comment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `comment` | `string` |

#### Returns

`void`

#### Defined in

src/sql-builder.ts:1114

___

### getReplacements

▸ **getReplacements**(): `unknown`[]

#### Returns

`unknown`[]

#### Defined in

src/sql-builder.ts:1136

___

### isValid

▸ **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/sql-builder.ts:1152

___

### output

▸ **output**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `replacements` | `unknown`[] |
| `sql` | `string` |

#### Defined in

src/sql-builder.ts:1141

___

### raw

▸ **raw**(`rawSql`): [`Builder`](Builder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawSql` | `string` |

#### Returns

[`Builder`](Builder.md)

#### Defined in

src/sql-builder.ts:1126

___

### select

▸ **select**(`fields`, `mapping?`): [`SelectBuilder`](SelectBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`SelectField`](../modules.md#selectfield)[] |
| `mapping?` | [`SelectFieldMapping`](../modules.md#selectfieldmapping) |

#### Returns

[`SelectBuilder`](SelectBuilder.md)

#### Defined in

src/sql-builder.ts:1118

___

### toSQL

▸ **toSQL**(): `string`

#### Returns

`string`

#### Defined in

src/sql-builder.ts:1131

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

src/sql-builder.ts:1156

___

### with

▸ **with**(`withQuery`): [`WithBuilder`](WithBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `withQuery` | [`WithQueryInput`](../modules.md#withqueryinput) |

#### Returns

[`WithBuilder`](WithBuilder.md)

#### Defined in

src/sql-builder.ts:1122

___

### $$

▸ **$$**(`name`): [`ReplaceByName`](ReplaceByName.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ReplaceByName`](ReplaceByName.md)

#### Defined in

src/sql-builder.ts:1104

___

### query

▸ **query**(): [`Builder`](Builder.md)

#### Returns

[`Builder`](Builder.md)

#### Defined in

src/sql-builder.ts:1096

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

src/sql-builder.ts:1100
