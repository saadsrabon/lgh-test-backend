import { Schema, Types} from "mongoose";

export type IPost = {
    title: string;
    content: string;
    authorId:Types.ObjectId;
    createdAt: Date;

}

// 