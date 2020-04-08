import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CommentsService {
  async find(query = {}) {
    let comments = await dbContext.Comments.find(query);
    return comments;
  }
  async findById(id) {
    let comment = await dbContext.Comments.findById(id);
    if (!comment) {
      throw new BadRequest("Invalid Id");
    }
    return comment;
  }
  async create(body) {
    let comment = await dbContext.Comments.create(body)
    return comment
  }
  async remove(id) {
    let comment = await dbContext.Comments.findByIdAndRemove(id)
    return comment
  }
  async edit(id, body) {
    let comment = await dbContext.Comments.findByIdAndUpdate(id, body, { new: true })
    return comment
  }
}

export const commentsService = new CommentsService();