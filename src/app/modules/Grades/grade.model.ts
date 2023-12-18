import { Schema, model } from 'mongoose';
import { GradeModel, IGrade } from './grade.interface';



const gradeSchema = new Schema<IGrade>(
  {
    name: {
      type: String,
      required: true,
    },
    notices: {
      type: [Object],
      
    },
    routine: {
     type: Object,
    },
    },

  {
    timestamps: true,
  }
);
export const Grades = model<IGrade, GradeModel>('Grades', gradeSchema);
