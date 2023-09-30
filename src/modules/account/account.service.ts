import { AccountExistsError, CreateAccountParams } from "./account.types";
import { AccountReader } from "./store/account.reader";
import { AccountWriter } from "./store/account.writer";

export class AccountService {
    static async createAccount(params: CreateAccountParams) {
        const foundAccount = await AccountReader.findAccount({ email: params.email });

        if (foundAccount) {
            throw new AccountExistsError(params.email);
        }

        return AccountWriter.createAccount(params);
    }
}