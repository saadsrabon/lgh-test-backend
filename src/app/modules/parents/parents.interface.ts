import { Model, Types } from 'mongoose';


export type IParent = {
 name: string;
    email: string;
    phone: string;
    childrenId?: Types.ObjectId;
    
};
export type ParentModel = Model<IParent, Record<string, unknown>>;
