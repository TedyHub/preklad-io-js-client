[Preklad.IO API Client - v1.0.1](../README.md) / ApiConfig

# Class: ApiConfig

The configuration object definition

## Table of contents

### Constructors

- [constructor](ApiConfig.md#constructor)

### Properties

- [API\_URL](ApiConfig.md#api_url)

### Accessors

- [apiKey](ApiConfig.md#apikey)
- [fetch](ApiConfig.md#fetch)

## Constructors

### constructor

• **new ApiConfig**(): [`ApiConfig`](ApiConfig.md)

#### Returns

[`ApiConfig`](ApiConfig.md)

## Properties

### API\_URL

• **API\_URL**: `string` = `"https://api.preklad.io/api/translate"`

#### Defined in

[config.ts:20](https://github.com/TedyHub/preklad-io-js-client/blob/fbb2f49/src/config.ts#L20)

## Accessors

### apiKey

• `get` **apiKey**(): `string`

Get the API key

#### Returns

`string`

#### Defined in

[config.ts:45](https://github.com/TedyHub/preklad-io-js-client/blob/fbb2f49/src/config.ts#L45)

• `set` **apiKey**(`k`): `void`

Set the API key from preklad.io
https://preklad.io

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |

#### Returns

`void`

#### Defined in

[config.ts:38](https://github.com/TedyHub/preklad-io-js-client/blob/fbb2f49/src/config.ts#L38)

___

### fetch

• `get` **fetch**(): [`FetchFunction`](../README.md#fetchfunction)

Get fetch function

#### Returns

[`FetchFunction`](../README.md#fetchfunction)

#### Defined in

[config.ts:59](https://github.com/TedyHub/preklad-io-js-client/blob/fbb2f49/src/config.ts#L59)

• `set` **fetch**(`f`): `void`

Custom fetch function

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`FetchFunction`](../README.md#fetchfunction) |

#### Returns

`void`

#### Defined in

[config.ts:52](https://github.com/TedyHub/preklad-io-js-client/blob/fbb2f49/src/config.ts#L52)
