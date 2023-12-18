import { Schema, model } from 'mongoose';
import { AdminModel, IAdmin } from './admin.interface';


const AdminSchema = new Schema<IAdmin>(
  {
    name:{
      type: String,
      required: true,
    },
    email:{
      type: String,
      required: true,
      unique: true,
    },
    designation:{
      type: String,
      required: true,
    },
    template:{
      type: Object,
    },
    },

  {
    timestamps: true,
  }
);
export const Admin = model<IAdmin, AdminModel>('Admin', AdminSchema);
