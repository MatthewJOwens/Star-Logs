import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class AuthorsService {
  async find(query = {}) {
    let authors = await dbContext.Authors.find(query);
    return authors;
  }
  async findById(id) {
    let author = await dbContext.Authors.findById(id);
    if (!author) {
      throw new BadRequest("Invalid Id");
    }
    return author;
  }
  async create(body) {
    let author = await dbContext.Authors.create(body)
    return author
  }
  async remove(id) {
    let author = await dbContext.Authors.findByIdAndRemove(id)
    return author
  }
  async edit(id, body) {
    let author = await dbContext.Authors.findByIdAndUpdate(id, body, { new: true })
    return author
  }
}

export const authorsService = new AuthorsService();