import { Schema, model } from "mongoose";
import { INotice } from "./notices.interface";


const noticeSchema  = new Schema<INotice>({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    gradeId: {
        type: String,
       
    },
});


export const Notices = model('Notices', noticeSchema);