---
id: "Builder"
title: "Class: Builder"
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

[src/builders/builder.ts:22](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L22)

## Properties

### \_comment

• `Optional` **\_comment**: `string`

#### Defined in

[src/builders/builder.ts:19](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L19)

___

### \_parentBuilder

• `Optional` **\_parentBuilder**: [`Builder`](Builder.md)

#### Defined in

[src/builders/builder.ts:20](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L20)

___

### \_replacements

• **\_replacements**: `unknown`[] = `[]`

#### Defined in

[src/builders/builder.ts:18](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L18)

___

### \_steps

• **\_steps**: `BuilderInterface`[] = `[]`

#### Defined in

[src/builders/builder.ts:17](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L17)

## Accessors

### $

• `get` **$**(): `symbol`

#### Returns

`symbol`

#### Defined in

[src/builders/builder.ts:48](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L48)

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

[src/builders/builder.ts:106](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L106)

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

[src/builders/builder.ts:98](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L98)

___

### clone

▸ **clone**(): [`Builder`](Builder.md)

#### Returns

[`Builder`](Builder.md)

#### Defined in

[src/builders/builder.ts:86](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L86)

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

[src/builders/builder.ts:52](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L52)

___

### getReplacements

▸ **getReplacements**(): `unknown`[]

#### Returns

`unknown`[]

#### Defined in

[src/builders/builder.ts:74](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L74)

___

### isValid

▸ **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/builders/builder.ts:90](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L90)

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

[src/builders/builder.ts:79](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L79)

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

[src/builders/builder.ts:64](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L64)

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

[src/builders/builder.ts:56](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L56)

___

### toSQL

▸ **toSQL**(): `string`

#### Returns

`string`

#### Defined in

[src/builders/builder.ts:69](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L69)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/builders/builder.ts:94](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L94)

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

[src/builders/builder.ts:60](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L60)

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

[src/builders/builder.ts:42](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L42)

___

### query

▸ **query**(): [`Builder`](Builder.md)

#### Returns

[`Builder`](Builder.md)

#### Defined in

[src/builders/builder.ts:34](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L34)

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

[src/builders/builder.ts:38](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/builders/builder.ts#L38)
