import AppError from "../error/error.handler";

export enum AccountStatus {
    ACTIVE = 'ACTIVE',
    IN_ACTIVE = 'IN_ACTIVE'
};

export type FindAccountParams = Partial<{
    id: string;
    email: string;
}>;

export type CreateAccountParams = {
    name: string;
    email: string;
    password: string;
}

export type UpdateAccountParams = Partial<{
    name: string;
    email: string;
    status: AccountStatus;
}>;

export type RemoveAccountParams = {
    id: string;
}

export class Account {
    id!: string;
    name!: string;
    email!: string;
    status!: AccountStatus;
}

export enum AccountErrorCode {
    ACCOUNT_EXISTS = 'ACCOUNT_ERR_01',
    ACCOUNT_DOES_NOT_EXIST = 'ACCOUNT_ERR_02'
}

export class AccountExistsError extends AppError {
    code: AccountErrorCode;
  
    constructor(email: string) {
      super(`An account with email ${email} already exists.`);
      this.code = AccountErrorCode.ACCOUNT_EXISTS;
      this.httpStatusCode = 409;
    }
  }

  export class AccountDoesNotExistError extends AppError {
    code: AccountErrorCode;
  
    constructor(id: string) {
      super(`An account with id ${id} does not exist in the system.`);
      this.code = AccountErrorCode.ACCOUNT_DOES_NOT_EXIST;
      this.httpStatusCode = 409;
    }
  }