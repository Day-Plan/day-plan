import { Request, Response, NextFunction } from "express";
import { AccountService } from "./account.service";
import { CreateAccountParams } from "./account.types";

export class AccountController {
    public static async createAccount(req: Request, res: Response, next: NextFunction) {
        try {
            const account = await AccountService.createAccount(req.body as CreateAccountParams);
            res.status(201).send(account);
        } catch (e) {
            next(e);
        }
    }

    public static async removeAccount(req: Request, res: Response, next: NextFunction) {
        try {
            const { accountId } = req.params;
            const account = await AccountService.removeAccount({
                id: accountId as string,
            });
            res.status(200).send(account);
        } catch (e) {
            next(e);
        }
    }
}