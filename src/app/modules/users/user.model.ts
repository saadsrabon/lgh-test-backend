import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../../config';

const userSchema = new Schema<IUser>(
  {
    // id: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      match:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      minlength:8
    },
    studentId:{
      type: Schema.Types.ObjectId,
      ref: 'Student', //collection name as
    },
    parentId:{
      type: Schema.Types.ObjectId,
      ref: 'Parent', //collection name as
    },
    facilitatorId:{
      type: Schema.Types.ObjectId,
      ref: 'Facilitator', //collection name as
    },
    adminId:{
      type: Schema.Types.ObjectId,
      ref: 'Admin'
    },

    },


);
userSchema.pre<IUser>('save',async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.salt_rounds));
  next();
})
export const User = model<IUser, UserModel>('User', userSchema);
