---
id: "RawFragment"
title: "Class: RawFragment"
sidebar_label: "RawFragment"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`FragmentInterface`](../interfaces/FragmentInterface.md)

## Constructors

### constructor

• **new RawFragment**(`sql`): [`RawFragment`](RawFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |

#### Returns

[`RawFragment`](RawFragment.md)

#### Defined in

[src/fragments/raw-fragment.ts:7](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/fragments/raw-fragment.ts#L7)

## Properties

### \_sql

• **\_sql**: `string`

#### Defined in

[src/fragments/raw-fragment.ts:5](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/fragments/raw-fragment.ts#L5)

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

[src/fragments/raw-fragment.ts:11](https://github.com/alesmenzel/sql-builder/blob/e62707c/src/fragments/raw-fragment.ts#L11)
