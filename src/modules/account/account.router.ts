import { Router } from "express";
import { AccountController } from "./account.controller";

export default class AccountRouter {
    public static getRoutes(): Router {
        const router = Router();

        router.post(
            '/',
            AccountController.createAccount
        );

        router.delete(
            '/:accountId',
            AccountController.removeAccount
        );

        return router;
    }
}