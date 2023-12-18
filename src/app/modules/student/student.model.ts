import { Schema, model } from 'mongoose';
import { IStudent, StudentModel } from './student.interface';


const studentSchema = new Schema<IStudent>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name:{
      type: String,
      required: true,
    },
    gender:{
      type: String,
     
    },
    birthdate:{
      type: String,
    
    },
    email:{
      type: String,
      required: true,
      unique: true,
    },
    grade:{
      type: String,
      required: true,
    },
    },

  {
    timestamps: true,
  }
);
export const Student = model<IStudent, StudentModel>('Student', studentSchema);
