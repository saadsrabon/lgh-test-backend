import { Model } from 'mongoose';

export type INotice = {
    title: string;
    description: string;
    gradeId?:string;
    };
export type NoticeModel = Model<INotice, Record<string, unknown>>;

