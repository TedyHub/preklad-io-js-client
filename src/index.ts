import { ApiConfig, config } from "./config";
import type { FetchFunction } from "./config";

// import types
import type { TranslateOptions } from "./translate";
import { ApiError } from "./api-error";
import { translation } from "./translate";

// export types
export type { TranslateOptions, FetchFunction };

// Exporting classes, objects, functions, etc.
export { ApiConfig, config, ApiError, translation };
