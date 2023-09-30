import AppError from "../error/error.handler";

export enum AccountStatus {
    ACTIVE = 'ACTIVE',
    IN_ACTIVE = 'IN_ACTIVE'
};

export type FindAccountParams = {
    email: string;
};

export type CreateAccountParams = {
    name: string;
    email: string;
    password: string;
}

export class Account {
    id!: string;
    name!: string;
    email!: string;
    status!: AccountStatus;
}

export enum AccountErrorCode {
    ACCOUNT_EXISTS = 'ACCOUNT_ERR_01',
}

export class AccountExistsError extends AppError {
    code: AccountErrorCode;
  
    constructor(email: string) {
      super(`An account with email ${email} already exists.`);
      this.code = AccountErrorCode.ACCOUNT_EXISTS;
      this.httpStatusCode = 409;
    }
  }