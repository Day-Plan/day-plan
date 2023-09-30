import mongoose, { ObjectId, model } from "mongoose";
import { AccountStatus } from "../account.types";
const { Schema } = mongoose;

export interface IAccount {
    _id: ObjectId;
    name: string;
    email: string;
    password: string;
    status: AccountStatus;
}

const accountSchema = new Schema<IAccount>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    status: { type: String, enum: AccountStatus, default: AccountStatus.ACTIVE }
});

export const AccountModel = model<IAccount>('Account', accountSchema);