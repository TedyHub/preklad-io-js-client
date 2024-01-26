import { performFetch } from "./performFetch";
import { config } from "./config";
import { ApiError } from "./api-error";
import * as supportedLangs from "./languages.json";

/**
 * Optional
 */
export type TranslateOptions = {
  noCache?: boolean; // set to true to disable internal caching
  ignoreWords?: string[]; // define words that should not be translated
};

const translationsCache = new Map<string, NonNullable<unknown>>();
let lastFromLanguage = "en";
let lastToLanguage = "";

/**
 * Translate list of  texts  or  a plain text  to other language
 * @param translateData  is a plain text on a json object   i.e { 'hello.label': "Hello World", 'bye.label': "Bye Bye World"}
 * @param toLanguage -  target language code
 * @param fromLanguage - source language code,  'en' is used by default if missing
 * @param options - additional parameters  {noCache: boolean, ignoreWords?: string[]}  allow  to disable caching or put ignore words that should not be translated
 */
async function tr(
  translateData: string | NonNullable<unknown>,
  toLanguage: string,
  fromLanguage = "en",
  options: TranslateOptions = {}
): Promise<NonNullable<unknown> | string> {
  // validate input data
  if (!config.apiKey) {
    throw new Error("API-KEY is not defined.");
  }

  if (!translateData) {
    throw new Error("Invalid input data.");
  }

  if (!fromLanguage) {
    if (!lastFromLanguage) {
      fromLanguage = "en";
    }
    fromLanguage = lastFromLanguage;
  }

  if (!toLanguage) {
    if (!lastToLanguage) {
      throw new Error("Target language code is not defined.");
    }
    toLanguage = lastToLanguage;
  }

  if (supportedLangs.langs.find((l) => l.code === fromLanguage) === undefined) {
    throw new Error("Source language code is not supported. " + fromLanguage);
  }

  if (supportedLangs.langs.find((l) => l.code === toLanguage) === undefined) {
    throw new Error("Target language code is not supported." + toLanguage);
  }

  if (typeof translateData === "string") {
    // translate plain text
    const result = await translateText(
      translateData,
      fromLanguage,
      toLanguage,
      options.ignoreWords
    );
    if (!options.noCache) {
      saveDataToCache(result, toLanguage, fromLanguage, translateData);
    }
    lastFromLanguage = fromLanguage;
    lastToLanguage = toLanguage;

    return result;
  } else {
    // translate object
    const result = await translateObject(
      translateData,
      fromLanguage,
      toLanguage,
      options.ignoreWords
    );
    if (!options.noCache) {
      saveDataToCache(result, toLanguage, fromLanguage);
    }
    lastFromLanguage = fromLanguage;
    lastToLanguage = toLanguage;
    return result;
  }
}

/**
 *  Cache received translations  for future use
 */
function saveDataToCache(
  data: string | NonNullable<unknown>,
  to: string,
  from: string,
  originalText = ""
) {
  const langKey = `${from}_${to}`;

  const cache = translationsCache.get(langKey) || {};
  if (typeof data === "string") {
    const keyHash = simpleHash(originalText);
    cache[keyHash] = data;
    translationsCache.set(langKey, cache);
  } else {
    // join res.data with data
    for (const [key, value] of Object.entries(data)) {
      cache[key] = value;
    }
    translationsCache.set(langKey, cache);
  }
}

/**
 * Find already translated data stored from cache. It returns key in case  translations has not been found.
 * @param key - key to translation data or  original text message in case of plain text translation
 * @param to - target language code. In case it's not defined, latest language code is used
 * @param from - source language code, In case it's not defined, latest language code is used
 */
function find(key: string, to: string, from: string): string {
  if (!key) {
    return "";
  }

  if (!to) {
    if (!lastToLanguage) {
      throw new Error("Target language code is not defined.");
    }
    to = lastToLanguage;
  }

  if (!from) {
    from = lastFromLanguage || "en";
  }

  const langKey = `${from}_${to}`;
  const data = translationsCache.get(langKey) || {};
  if (!data) {
    return key;
  }

  const value = data[key];
  if (value) {
    return value;
  }
  // try to get by hash
  const keyHash = simpleHash(key);
  return data[keyHash] || key;
}

/**
 * Clear internal cache  with translations  if any
 */
function clearCache() {
  translationsCache.clear();
}

/**
Load and translate several messages with the single reguest. Max request size is 1Mb. Result is stored in internal cache for future usage
 * @param translatedObject - data for translation in following format {key: 'text 1', key2: 'text 2'}
 * @param fromLanguage - source language code
 * @param toLanguage - target language code
 * @param ignoreWords - array of ignore words
 */
async function translateObject(
  translatedObject: NonNullable<unknown>,
  fromLanguage: string,
  toLanguage: string,
  ignoreWords: string[]
): Promise<NonNullable<unknown>> {
  const url = config.API_URL + "/json";

  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Key": config.apiKey,
      "X-From": fromLanguage,
      "X-To": toLanguage,
    },
    body: JSON.stringify(translatedObject || {}),
  };

  if (ignoreWords?.length > 0) {
    request.headers["X-ignore"] = ignoreWords.join(",");
  }

  const res = await performFetch(url, request);
  if (res.errorCode !== undefined) {
    throw new ApiError(res.errorCode, res.message);
  }

  return res.data;
}

/**
 * Translate   plain text message
 * @param text
 * @param fromLanguage
 * @param toLanguage
 * @param ignoreWords - array of ignore words
 */
async function translateText(
  text: string,
  fromLanguage: string,
  toLanguage: string,
  ignoreWords?: string[]
): Promise<string> {
  const url = config.API_URL + "/text";
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
      Accept: "text/plain",
      "X-key": config.apiKey,
      "X-from": fromLanguage,
      "X-to": toLanguage,
    },
    body: text,
  };

  if (ignoreWords?.length > 0) {
    request.headers["X-ignore"] = ignoreWords.join(",");
  }

  const res = await performFetch(url, request);
  if (res.errorCode !== undefined) {
    throw new ApiError(res.errorCode, res.message);
  }

  return res;
}

const simpleHash = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return new Uint32Array([hash])[0].toString(36);
};

const translation = {
  tr,
  find,
  clearCache,
  config,
};

export { translation };
