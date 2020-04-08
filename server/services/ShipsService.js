import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ShipsService {
  async find(query = {}) {
    let ships = await dbContext.Ships.find(query);
    return ships;
  }
  async findById(id) {
    let ship = await dbContext.Ships.findById(id);
    if (!ship) {
      throw new BadRequest("Invalid Id");
    }
    return ship;
  }
  async create(body) {
    let ship = await dbContext.Ships.create(body)
    return ship
  }
  async remove(id) {
    let ship = await dbContext.Ships.findByIdAndRemove(id)
    return ship
  }
  async edit(id, body) {
    let ship = await dbContext.Ships.findByIdAndUpdate(id, body, { new: true })
    return ship
  }
}

export const shipsService = new ShipsService();