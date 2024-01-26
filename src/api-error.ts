/**
 * A ApiError is an Error that includes the HTTP response details
 */
export class ApiError extends Error {
  constructor(errorCode: number, message: string) {
    super(
      `Call to endpoint failed with the error code ${errorCode}. ${message}`
    );
  }
}
