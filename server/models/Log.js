import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Log = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    ship: { type: ObjectId, ref: "Ship", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Log;
