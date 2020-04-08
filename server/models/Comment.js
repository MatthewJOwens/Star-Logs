import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Comment = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    log: { type: ObjectId, ref: "Log", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Comment;
