import { Model } from 'mongoose';

export type IAdmin = {
    name: string;
    email: string;
    designation: string;
    template?: object;
};
export type AdminModel = Model<IAdmin, Record<string, unknown>>;
