import { Schema, model } from 'mongoose';
import { IParent, ParentModel } from './parents.interface';



const ParentSchema = new Schema<IParent>(
  {
   name:{
      type: String,
      required: true,
    },
    
    email:{
      type: String,
      unique: true,
      required: true,
    },
    phone:{
      type: String,
      required: true,
    },
    childrenId:{
      type: Schema.Types.ObjectId,
      ref: 'Student', //collection name as
    },
    },
 

  {
    timestamps: true,
  }
);
export const Parent= model<IParent, ParentModel>('Parent', ParentSchema);
