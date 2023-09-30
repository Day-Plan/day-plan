import bcrypt from "bcrypt";

import { Account, CreateAccountParams } from "../account.types";
import { AccountModel, IAccount } from "./account.schema";
import { AccountUtil } from "./account.util";

export class AccountWriter {
    static async createAccount(params: CreateAccountParams): Promise<Account> {
        const saltRounds = process.env.BCRYPT_SALT_ROUNDS;
        const encryptedPassword = await bcrypt.hash(params.password, Number(saltRounds));

        const accountDocument = await AccountModel.create({
            email: params.email,
            name: params.name,
            password: encryptedPassword,
        });

        return AccountUtil.convertAccountDocumentToAccount(accountDocument as IAccount);
    }
}