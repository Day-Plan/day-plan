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
}