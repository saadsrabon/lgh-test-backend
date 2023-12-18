import { Model, Schema,model } from "mongoose";
import { IPost } from "./posts.interface";

// 
type postModel =Model<IPost ,object>
const postSchema = new Schema<IPost>({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: String,
        required: true,
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

// 
export const Post =model<IPost,postModel>("Post", postSchema);