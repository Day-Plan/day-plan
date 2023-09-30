import { Account, AccountStatus, FindAccountParams } from "../account.types";
import { AccountModel, IAccount } from "./account.schema";
import { AccountUtil } from "./account.util";

export class AccountReader {
    static async findAccount(params: FindAccountParams): Promise<Account | null> {
        const accountDocument = await AccountModel.findOne({
            email: params.email,
            status: AccountStatus.ACTIVE,
        });

        return accountDocument ? AccountUtil.convertAccountDocumentToAccount(accountDocument as IAccount) : null;
    }
}