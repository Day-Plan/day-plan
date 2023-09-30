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
}