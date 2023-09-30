export default class AppError extends Error {
  code!: string;
  httpStatusCode!: number;
}
