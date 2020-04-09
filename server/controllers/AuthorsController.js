import express from "express";
import BaseController from "../utils/BaseController";
import { authorsService } from "../services/AuthorsService";
import { BadRequest } from "../utils/Errors";

export class AuthorsController extends BaseController {

  constructor() {
    super("api/authors");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .put("/:id", this.edit)
      .post("", this.create)
      .delete("/:id", this.remove);
  }
  async remove(req, res, next) {
    try {
      let author = await authorsService.remove(req.params.id)
      res.send(author)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let author = await authorsService.edit(req.params.id, req.body)
      res.send(author)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let author = await authorsService.findById(req.params.id)
      if (!author) {
        throw new BadRequest("Invalid author ID")
      }
      res.send(author)
    } catch (error) {
      next(error)
    }
  }

  async getAll(_, res, next) {
    try {
      let authors = await authorsService.find()
      return res.send(authors);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let author = await authorsService.create(req.body)
      res.send(author);
    } catch (error) {
      next(error);
    }
  }
}
