---
id: "ColumnFragment"
title: "Class: ColumnFragment"
custom_edit_url: null
---

## Implements

- [`FragmentInterface`](../interfaces/FragmentInterface.md)

## Constructors

### constructor

• **new ColumnFragment**(`name`): [`ColumnFragment`](ColumnFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ColumnFragment`](ColumnFragment.md)

#### Defined in

[src/fragments/column-fragment.ts:8](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/fragments/column-fragment.ts#L8)

## Properties

### \_name

• **\_name**: `string`

#### Defined in

[src/fragments/column-fragment.ts:6](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/fragments/column-fragment.ts#L6)

## Methods

### toSQL

▸ **toSQL**(`_builder`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_builder` | [`Builder`](Builder.md) |

#### Returns

`string`

#### Implementation of

[FragmentInterface](../interfaces/FragmentInterface.md).[toSQL](../interfaces/FragmentInterface.md#tosql)

#### Defined in

[src/fragments/column-fragment.ts:12](https://github.com/alesmenzel/sql-builder/blob/0850cdd/src/fragments/column-fragment.ts#L12)
