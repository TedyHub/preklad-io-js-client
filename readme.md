<p align="center">
<a href="https://prekald.io/client-js/">offcial page →</a><br>
  <img src="images/ex.png" width="334px">
</p>

<p align="center" style="color: #AAA">
  The Javascript & TypeScript library to  <a href="https://www.preklad.io">Preklad.IO</a> <br>API translation service.
</p>

<p align="center">
  <img src="images/JS-logo.svg" width="20px">
  <img src="images/TS-logo.svg" width="20px">
</p>

# API Client Library for JavaScript / TypeScript

## What?

The library provides easy integration with  **Preklad.IO** service. It allows  to use all the features of the service in your code.
Such as:
- json data translations
- plain text translations

## Why?

The project is entirely written in TypeScript and all the function arguments are nicely documented and typed.

- Better developer experience of working with APIs in the code editor - with parameter info, quick info, and member lists.
  - Code completion: reducing typos and other common mistakes
  - Content assist and code hinting providing contextual help
- Type safety - for higher quality code and testing
- Backward compatibility: guaranteed on changes to API endpoints
- Runs: in Node.js or in browser

# Install
```shell
npm install --save @preklad-io-js/client
```


# Quick start
```ts
// Import the whole library
import * as translation from '@preklad-io-js/client';

```

The [examples](examples/) folder includes are featuring usages for **NodeJS**, **browser with UMD** and **browser with ES module**.


### Translate key-text type data  
You can translate already  predefined  collection of texts:
```ts
const  myText = {
  helloMesage:  "Hello Worlds",
  byeMessage: "Bye bye!"
};

// translate data to other language
const result = await translation.loadData(myText, 'en', 'es');

// show result of the translations
console.log(translation.tr('helloMessage'))
```

### Translate  plan text 
You can translate  only single plain text messsage:
```ts
// translate plain text to other language
const result = await translation.translateText('The message should be shown in Spanish.', 'en', 'es');

// show  translated text
console.log(result);
```

### Languages
List of supported languages can be found in the  [Documenation](https://preklad.io/docs).

In case the source language is not defined - 'en' is used by default.


# From NodeJS
NodeJS includes a stable `fetch()` function only from its version *18*, and this client does not contain a polyfill. If the `fetch()` function exists (browser or Node >= 18) then it is going to be resolved automatically, Yet, a custom `fetch()` function can be provided to the `config` object for Node < 18.

In [this NodeJS example](examples/node-examples.js), you can see that the package [Node Fetch](https://www.npmjs.com/package/node-fetch) has been `npm install`ed and is passed to the config object of the *Preklad.IO Client*.

```js
import {
  config,
  // ...
} from '@preklad-io-js/client';

// For this example to work, you must bring your own node-compatible fetch,
// unles you are using a version of Nodejs that already contains fetch (>=18)
import fetch from 'node-fetch';

config.fetch = fetch;

// ...
```

# Terms and usage limitations
The terms amd privacy plicy  can be found on the website [Terms and Conditions](https://preklad.io/terms) or contact us.
