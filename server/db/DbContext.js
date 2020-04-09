import ValueSchema from "../models/Value";
import ShipSchema from "../models/Ship";
import LogSchema from "../models/Log";
import CommentSchema from "../models/Comment";
import AuthorSchema from "../models/Author"
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Ships = mongoose.model("Ship", ShipSchema);
  Logs = mongoose.model("Log", LogSchema);
  Comments = mongoose.model("Comment", CommentSchema);
  Authors = mongoose.model("Author", AuthorSchema);
}

export const dbContext = new DbContext();
