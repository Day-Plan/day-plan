import { Account, AccountDoesNotExistError, AccountExistsError, AccountStatus, CreateAccountParams, RemoveAccountParams } from "./account.types";
import { AccountReader } from "./store/account.reader";
import { AccountWriter } from "./store/account.writer";

export class AccountService {
    static async createAccount(params: CreateAccountParams): Promise<Account> {
        const foundAccount = await AccountReader.findAccount({ email: params.email });

        if (foundAccount) {
            throw new AccountExistsError(params.email);
        }

        return AccountWriter.createAccount(params);
    }

    static async removeAccount(params: RemoveAccountParams): Promise<Account> {
        const foundAccount = await AccountReader.findAccount({ id: params.id });

        if (!foundAccount) {
            throw new AccountDoesNotExistError(params.id);
        }

        return AccountWriter.updateAccount(params.id, { status: AccountStatus.IN_ACTIVE });
    }
}