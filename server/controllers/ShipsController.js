import express from "express";
import BaseController from "../utils/BaseController";
import { shipsService } from "../services/ShipsService";
import { BadRequest } from "../utils/Errors";

export class ShipsController extends BaseController {

  constructor() {
    super("api/ships");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .put("/:id", this.edit)
      .post("", this.create)
      .delete("/:id", this.remove);
  }
  async remove(req, res, next) {
    try {
      let ship = await shipsService.remove(req.params.id)
      res.send(ship)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let ship = await shipsService.edit(req.params.id, req.body)
      res.send(ship)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let ship = await shipsService.findById(req.params.id)
      if (!ship) {
        throw new BadRequest("Invalid ship ID")
      }
      res.send(ship)
    } catch (error) {
      next(error)
    }
  }

  async getAll(_, res, next) {
    try {
      let ships = await shipsService.find()
      return res.send(ships);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let ship = await shipsService.create(req.body)
      res.send(ship);
    } catch (error) {
      next(error);
    }
  }
}
