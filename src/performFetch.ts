import { config } from "./config";

export async function performFetch(resource: string, options: any = {}) {
  if (config.fetch === null) {
    throw new Error(
      "The fetch function was not found. If on NodeJS < 18 specify the fetch function with config.fetch"
    );
  }
  const response = await config.fetch(resource, options);
  if (resource.includes("/text")) {
    if (response.ok) {
      return response.text();
    }
  }
  return response.json();
}
