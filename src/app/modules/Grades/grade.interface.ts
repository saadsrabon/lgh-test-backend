import { Model} from 'mongoose';

export type IGrade = {
    name: string;
    notices:Array<object>;
    routine?:object
    };

export type GradeModel = Model<IGrade, Record<string, unknown>>;
