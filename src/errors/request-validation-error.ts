import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

// Remark: Ideally this should be in a different file
// Part: Using Interface another option is to use an Abstract Class. Not using interface because in js world there is no interface but there is class and classes creted through abstract class has their class defination preserved.
// interface customError {
//   statusCode: number;
//   serializeErrors(): {
//     message: string;
//     field?: string;
//   }[];
// }

// export class RequestValidationError extends Error implements customError {
export class RequestValidationError extends CustomError {
  statusCode = 400;
  // errors: ValidationError[];
  // constructor(errors: ValidationError[]) {
  //   super();
  //   this.errors = errors;
  // }

  // Note: Equivalent to the above syntax
  constructor(public errors: ValidationError[]) {
    super("Invalid request parameters");

    // Important: When extending a built-in class like Error in TypeScript you need to set the prototype explicitly.
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => {
      return { message: error.msg, field: error.param };
    });
  }
}
