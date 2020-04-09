import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class LogsService {
  async find(query = {}) {
    let logs = await dbContext.Logs.find(query);
    return logs;
  }
  async findById(id) {
    let log = await dbContext.Logs.findById(id);
    if (!log) {
      throw new BadRequest("Invalid Id");
    }
    return log;
  }
  async findByAuthor(authorId) {
    let log = await dbContext.Logs.find({ author: authorId });
    if (!log) {
      throw new BadRequest("Invalid Id");
    }
    return log;
  }
  async create(body) {
    let log = await dbContext.Logs.create(body)
    return log
  }
  async remove(id) {
    let log = await dbContext.Logs.findByIdAndRemove(id)
    return log
  }
  async edit(id, body) {
    let log = await dbContext.Logs.findByIdAndUpdate(id, body, { new: true })
    return log
  }
}

export const logsService = new LogsService();