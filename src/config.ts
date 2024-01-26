export type FetchFunction = (url: string, options: object) => Promise<any>;

function tryGettingFetch() {
  // this is browser, fetch exists
  if (typeof self !== "undefined") {
    return fetch.bind(self);
  }

  if (typeof global !== "undefined" && global.fetch) {
    return global.fetch;
  }

  return null;
}

/**
 * The configuration object definition
 */
class ApiConfig {
  API_URL = "https://api.preklad.io/api/translate";
  //API_URL = "http://localhost:8080/api/translate";
  /**
   * Preklad.io  API key
   * https://preklad.io
   */
  private _apiKey = "";

  /**
   * The fetch function. To be set if in Node < 18, otherwise
   * will be automatically resolved.
   */
  private _fetch: FetchFunction | null = tryGettingFetch();

  /**
   * Set the API key from preklad.io
   * https://preklad.io
   */
  set apiKey(k: string) {
    this._apiKey = k;
  }

  /**
   * Get the API key
   */
  get apiKey(): string {
    return this._apiKey;
  }

  /**
   * Custom fetch function
   */
  set fetch(f: FetchFunction) {
    this._fetch = f;
  }

  /**
   * Get fetch function
   */
  get fetch(): FetchFunction | null {
    return this._fetch;
  }
}

/**
 * Configuration object
 */
const config = new ApiConfig();

export { ApiConfig, config };
