type FetchFunction = (url: string, options: object) => Promise<any>;
/**
 * The configuration object definition
 */
declare class ApiConfig {
    API_URL: string;
    /**
     * Preklad.io  API key
     * https://preklad.io
     */
    private _apiKey;
    /**
     * The fetch function. To be set if in Node < 18, otherwise
     * will be automatically resolved.
     */
    private _fetch;
    /**
     * Set the API key from preklad.io
     * https://preklad.io
     */
    set apiKey(k: string);
    /**
     * Get the API key
     */
    get apiKey(): string;
    /**
     * Custom fetch function
     */
    set fetch(f: FetchFunction);
    /**
     * Get fetch function
     */
    get fetch(): FetchFunction | null;
}
/**
 * Configuration object
 */
declare const config: ApiConfig;

/**
 * Optional
 */
type TranslateOptions = {
    noCache?: boolean;
    ignoreWords?: string[];
};
/**
 * Translate list of  texts  or  a plain text  to other language
 * @param translateData  is a plain text on a json object   i.e { 'hello.label': "Hello World", 'bye.label': "Bye Bye World"}
 * @param toLanguage -  target language code
 * @param fromLanguage - source language code,  'en' is used by default if missing
 * @param options - additional parameters  {noCache: boolean, ignoreWords?: string[]}  allow  to disable caching or put ignore words that should not be translated
 */
declare function tr(translateData: string | Object, toLanguage: string, fromLanguage?: string, options?: TranslateOptions): Promise<Object | string>;
/**
 * Find already translated data stored from cache. It returns key in case  translations has not been found.
 * @param key - key to translation data or  original text message in case of plain text translation
 * @param to - target language code. In case it's not defined, latest language code is used
 * @param from - source language code, In case it's not defined, latest language code is used
 */
declare function find(key: string, to: string, from: string): string;
/**
 * Clear internal cache  with translations  if any
 */
declare function clearCache(): void;
declare const translation: {
    tr: typeof tr;
    find: typeof find;
    clearCache: typeof clearCache;
    config: ApiConfig;
};

/**
 * A ApiError is an Error that includes the HTTP response details
 */
declare class ApiError extends Error {
    constructor(errorCode: number, message: string);
}

export { ApiConfig, ApiError, FetchFunction, TranslateOptions, config, translation };
