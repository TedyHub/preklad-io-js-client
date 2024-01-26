var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
function tryGettingFetch() {
  if (typeof self !== "undefined") {
    return fetch.bind(self);
  }
  if (typeof global !== "undefined" && global.fetch) {
    return global.fetch;
  }
  return null;
}
class ApiConfig {
  constructor() {
    __publicField(this, "API_URL", "https://api.preklad.io/api/translate");
    //API_URL = "http://localhost:8080/api/translate";
    /**
     * Preklad.io  API key
     * https://preklad.io
     */
    __publicField(this, "_apiKey", "");
    /**
     * The fetch function. To be set if in Node < 18, otherwise
     * will be automatically resolved.
     */
    __publicField(this, "_fetch", tryGettingFetch());
  }
  /**
   * Set the API key from preklad.io
   * https://preklad.io
   */
  set apiKey(k) {
    this._apiKey = k;
  }
  /**
   * Get the API key
   */
  get apiKey() {
    return this._apiKey;
  }
  /**
   * Custom fetch function
   */
  set fetch(f) {
    this._fetch = f;
  }
  /**
   * Get fetch function
   */
  get fetch() {
    return this._fetch;
  }
}
const config = new ApiConfig();

class ApiError extends Error {
  constructor(errorCode, message) {
    super(
      `Call to endpoint failed with the error code ${errorCode}. ${message}`
    );
  }
}

var __async$1 = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function performFetch(_0) {
  return __async$1(this, arguments, function* (resource, options = {}) {
    if (config.fetch === null) {
      throw new Error(
        "The fetch function was not found. If on NodeJS < 18 specify the fetch function with config.fetch"
      );
    }
    const response = yield config.fetch(resource, options);
    if (resource.includes("/text")) {
      if (response.ok) {
        return response.text();
      }
    }
    return response.json();
  });
}

var langs = [
	{
		language: "Afrikaans",
		code: "af"
	},
	{
		language: "Albanian",
		code: "sq"
	},
	{
		language: "Amharic",
		code: "am"
	},
	{
		language: "Arabic",
		code: "ar"
	},
	{
		language: "Armenian",
		code: "hy"
	},
	{
		language: "Assamese",
		code: "as"
	},
	{
		language: "Aymara",
		code: "ay"
	},
	{
		language: "Azerbaijani",
		code: "az"
	},
	{
		language: "Bambara",
		code: "bm"
	},
	{
		language: "Basque",
		code: "eu"
	},
	{
		language: "Belarusian",
		code: "be"
	},
	{
		language: "Bengali",
		code: "bn"
	},
	{
		language: "Bhojpuri",
		code: "bho"
	},
	{
		language: "Bosnian",
		code: "bs"
	},
	{
		language: "Bulgarian",
		code: "bg"
	},
	{
		language: "Catalan",
		code: "ca"
	},
	{
		language: "Cebuano",
		code: "ceb"
	},
	{
		language: "Chinese (Simplified)",
		code: "zh-CN"
	},
	{
		language: "Chinese (Simplified)",
		code: "zh"
	},
	{
		language: "Chinese (Traditional)",
		code: "zh-TW"
	},
	{
		language: "Corsican",
		code: "co"
	},
	{
		language: "Croatian",
		code: "hr"
	},
	{
		language: "Czech",
		code: "cs"
	},
	{
		language: "Danish",
		code: "da"
	},
	{
		language: "Dhivehi",
		code: "dv"
	},
	{
		language: "Dogri",
		code: "doi"
	},
	{
		language: "Dutch",
		code: "nl"
	},
	{
		language: "English",
		code: "en"
	},
	{
		language: "Esperanto",
		code: "eo"
	},
	{
		language: "Estonian",
		code: "et"
	},
	{
		language: "Ewe",
		code: "ee"
	},
	{
		language: "Filipino (Tagalog)",
		code: "fil"
	},
	{
		language: "Finnish",
		code: "fi"
	},
	{
		language: "French",
		code: "fr"
	},
	{
		language: "Frisian",
		code: "fy"
	},
	{
		language: "Galician",
		code: "gl"
	},
	{
		language: "Georgian",
		code: "ka"
	},
	{
		language: "German",
		code: "de"
	},
	{
		language: "Greek",
		code: "el"
	},
	{
		language: "Guarani",
		code: "gn"
	},
	{
		language: "Gujarati",
		code: "gu"
	},
	{
		language: "Haitian Creole",
		code: "ht"
	},
	{
		language: "Hausa",
		code: "ha"
	},
	{
		language: "Hawaiian",
		code: "haw"
	},
	{
		language: "Hebrew",
		code: "he"
	},
	{
		language: "Hebrew",
		code: "iw"
	},
	{
		language: "Hindi",
		code: "hi"
	},
	{
		language: "Hmong",
		code: "hmn"
	},
	{
		language: "Hungarian",
		code: "hu"
	},
	{
		language: "Icelandic",
		code: "is"
	},
	{
		language: "Igbo",
		code: "ig"
	},
	{
		language: "Ilocano",
		code: "ilo"
	},
	{
		language: "Indonesian",
		code: "id"
	},
	{
		language: "Irish",
		code: "ga"
	},
	{
		language: "Italian",
		code: "it"
	},
	{
		language: "Japanese",
		code: "ja"
	},
	{
		language: "Javanese",
		code: "jv"
	},
	{
		language: "Javanese",
		code: "jw"
	},
	{
		language: "Kannada",
		code: "kn"
	},
	{
		language: "Kazakh",
		code: "kk"
	},
	{
		language: "Khmer",
		code: "km"
	},
	{
		language: "Kinyarwanda",
		code: "rw"
	},
	{
		language: "Konkani",
		code: "gom"
	},
	{
		language: "Korean",
		code: "ko"
	},
	{
		language: "Krio",
		code: "kri"
	},
	{
		language: "Kurdish",
		code: "ku"
	},
	{
		language: "Kurdish (Sorani)",
		code: "ckb"
	},
	{
		language: "Kyrgyz",
		code: "ky"
	},
	{
		language: "Lao",
		code: "lo"
	},
	{
		language: "Latin",
		code: "la"
	},
	{
		language: "Latvian",
		code: "lv"
	},
	{
		language: "Lingala",
		code: "ln"
	},
	{
		language: "Lithuanian",
		code: "lt"
	},
	{
		language: "Luganda",
		code: "lg"
	},
	{
		language: "Luxembourgish",
		code: "lb"
	},
	{
		language: "Macedonian",
		code: "mk"
	},
	{
		language: "Maithili",
		code: "mai"
	},
	{
		language: "Malagasy",
		code: "mg"
	},
	{
		language: "Malay",
		code: "ms"
	},
	{
		language: "Malayalam",
		code: "ml"
	},
	{
		language: "Maltese",
		code: "mt"
	},
	{
		language: "Maori",
		code: "mi"
	},
	{
		language: "Marathi",
		code: "mr"
	},
	{
		language: "Meiteilon (Manipuri)",
		code: "mni-Mtei"
	},
	{
		language: "Mizo",
		code: "lus"
	},
	{
		language: "Mongolian",
		code: "mn"
	},
	{
		language: "Myanmar (Burmese)",
		code: "my"
	},
	{
		language: "Nepali",
		code: "ne"
	},
	{
		language: "Norwegian",
		code: "no"
	},
	{
		language: "Nyanja (Chichewa)",
		code: "ny"
	},
	{
		language: "Odia (Oriya)",
		code: "or"
	},
	{
		language: "Oromo",
		code: "om"
	},
	{
		language: "Pashto",
		code: "ps"
	},
	{
		language: "Persian",
		code: "fa"
	},
	{
		language: "Polish",
		code: "pl"
	},
	{
		language: "Portuguese (Portugal, Brazil)",
		code: "pt"
	},
	{
		language: "Punjabi",
		code: "pa"
	},
	{
		language: "Quechua",
		code: "qu"
	},
	{
		language: "Romanian",
		code: "ro"
	},
	{
		language: "Russian",
		code: "ru"
	},
	{
		language: "Samoan",
		code: "sm"
	},
	{
		language: "Sanskrit",
		code: "sa"
	},
	{
		language: "Scots Gaelic",
		code: "gd"
	},
	{
		language: "Sepedi",
		code: "nso"
	},
	{
		language: "Serbian",
		code: "sr"
	},
	{
		language: "Sesotho",
		code: "st"
	},
	{
		language: "Shona",
		code: "sn"
	},
	{
		language: "Sindhi",
		code: "sd"
	},
	{
		language: "Sinhala (Sinhalese)",
		code: "si"
	},
	{
		language: "Slovak",
		code: "sk"
	},
	{
		language: "Slovenian",
		code: "sl"
	},
	{
		language: "Somali",
		code: "so"
	},
	{
		language: "Spanish",
		code: "es"
	},
	{
		language: "Sundanese",
		code: "su"
	},
	{
		language: "Swahili",
		code: "sw"
	},
	{
		language: "Swedish",
		code: "sv"
	},
	{
		language: "Tagalog (Filipino)",
		code: "tl"
	},
	{
		language: "Tajik",
		code: "tg"
	},
	{
		language: "Tamil",
		code: "ta"
	},
	{
		language: "Tatar",
		code: "tt"
	},
	{
		language: "Telugu",
		code: "te"
	},
	{
		language: "Thai",
		code: "th"
	},
	{
		language: "Tigrinya",
		code: "ti"
	},
	{
		language: "Tsonga",
		code: "ts"
	},
	{
		language: "Turkish",
		code: "tr"
	},
	{
		language: "Turkmen",
		code: "tk"
	},
	{
		language: "Twi (Akan)",
		code: "ak"
	},
	{
		language: "Ukrainian",
		code: "uk"
	},
	{
		language: "Urdu",
		code: "ur"
	},
	{
		language: "Uyghur",
		code: "ug"
	},
	{
		language: "Uzbek",
		code: "uz"
	},
	{
		language: "Vietnamese",
		code: "vi"
	},
	{
		language: "Welsh",
		code: "cy"
	},
	{
		language: "Xhosa",
		code: "xh"
	},
	{
		language: "Yiddish",
		code: "yi"
	},
	{
		language: "Yoruba",
		code: "yo"
	},
	{
		language: "Zulu",
		code: "zu"
	}
];

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const translationsCache = /* @__PURE__ */ new Map();
let lastFromLanguage = "en";
let lastToLanguage = "";
function tr(_0, _1) {
  return __async(this, arguments, function* (translateData, toLanguage, fromLanguage = "en", options = {}) {
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
    if (langs.find((l) => l.code === fromLanguage) === void 0) {
      throw new Error("Source language code is not supported. " + fromLanguage);
    }
    if (langs.find((l) => l.code === toLanguage) === void 0) {
      throw new Error("Target language code is not supported." + toLanguage);
    }
    if (typeof translateData === "string") {
      const result = yield translateText(
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
      const result = yield translateObject(
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
  });
}
function saveDataToCache(data, to, from, originalText = "") {
  const langKey = `${from}_${to}`;
  const cache = translationsCache.get(langKey) || {};
  if (typeof data === "string") {
    const keyHash = simpleHash(originalText);
    cache[keyHash] = data;
    translationsCache.set(langKey, cache);
  } else {
    for (const [key, value] of Object.entries(data)) {
      cache[key] = value;
    }
    translationsCache.set(langKey, cache);
  }
}
function find(key, to, from) {
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
  const keyHash = simpleHash(key);
  return data[keyHash] || key;
}
function clearCache() {
  translationsCache.clear();
}
function translateObject(translatedObject, fromLanguage, toLanguage, ignoreWords) {
  return __async(this, null, function* () {
    const url = config.API_URL + "/json";
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Key": config.apiKey,
        "X-From": fromLanguage,
        "X-To": toLanguage
      },
      body: JSON.stringify(translatedObject || {})
    };
    if ((ignoreWords == null ? void 0 : ignoreWords.length) > 0) {
      request.headers["X-ignore"] = ignoreWords.join(",");
    }
    const res = yield performFetch(url, request);
    if (res.errorCode !== void 0) {
      throw new ApiError(res.errorCode, res.message);
    }
    return res.data;
  });
}
function translateText(text, fromLanguage, toLanguage, ignoreWords) {
  return __async(this, null, function* () {
    const url = config.API_URL + "/text";
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
        Accept: "text/plain",
        "X-key": config.apiKey,
        "X-from": fromLanguage,
        "X-to": toLanguage
      },
      body: text
    };
    if ((ignoreWords == null ? void 0 : ignoreWords.length) > 0) {
      request.headers["X-ignore"] = ignoreWords.join(",");
    }
    const res = yield performFetch(url, request);
    if (res.errorCode !== void 0) {
      throw new ApiError(res.errorCode, res.message);
    }
    return res;
  });
}
const simpleHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash;
  }
  return new Uint32Array([hash])[0].toString(36);
};
const translation = {
  tr,
  find,
  clearCache,
  config
};

export { ApiConfig, ApiError, config, translation };
//# sourceMappingURL=preklad-io-js-client.mjs.map
