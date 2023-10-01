import { Account } from "../account.types";
import { IAccount } from "./account.schema";

export class AccountUtil {
    static convertAccountDocumentToAccount(accountDocument: IAccount): Account {
        const account = new Account();

        account.id = accountDocument._id.toString();
        account.email = accountDocument.email;
        account.name = accountDocument.name;
        account.status = accountDocument.status;

        return account;
    }

    static sanitiseParams<T extends Record<string, unknown>>(params: T): T {
        const sanitisedParams: Partial<T> = {};

        Object.keys(params).forEach((key) => {
            if (params[key] !== null && params[key] !== undefined) {
                sanitisedParams[key as keyof T] = params[key as keyof T];
            }
        });

        return sanitisedParams as T;
      }
}