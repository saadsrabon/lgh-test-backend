import { Schema} from "mongoose";

export type IPost = {
    title: string;
    content: string;
    authorId: Schema.Types.ObjectId;
    createdAt: Date;

}

// 