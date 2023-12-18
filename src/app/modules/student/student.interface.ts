import { Model } from 'mongoose';

export type IStudent = {
 id:string;
 name: string;
 gender?: string;
 birthdate?: string;
 email: string;
 grade: string;
};
export type StudentModel = Model<IStudent, Record<string, unknown>>;
