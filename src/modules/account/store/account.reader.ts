import { Account, AccountStatus, FindAccountParams } from "../account.types";
import { AccountModel, IAccount } from "./account.schema";
import { AccountUtil } from "./account.util";

export class AccountReader {
    static async findAccount(params: FindAccountParams): Promise<Account | null> {
        const sanitisedParams = AccountUtil.sanitiseParams(params);
        const accountDocument = await AccountModel.findOne({
            ...sanitisedParams,
            status: AccountStatus.ACTIVE,
        });

        return accountDocument ? AccountUtil.convertAccountDocumentToAccount(accountDocument as IAccount) : null;
    }
}