import { Schema, model } from 'mongoose';
import { FacilitatorsModel, IFacilitator } from './teacher.interface';


const facilitatorSchema = new Schema<IFacilitator>(
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
export const Facilitator = model<IFacilitator, FacilitatorsModel>('Facilitator', facilitatorSchema);
