export abstract class CustomError extends Error {
  abstract statusCode: number; // Note: The class that extends this abstract class must have this statusCode property becuse it's defined as abstract.

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[]; // Important: No defining the method just defining the method signature. It will be defined in the class that extends this abstract class.
}
