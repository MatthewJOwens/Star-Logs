import express from "express";
import BaseController from "../utils/BaseController";
import { commentsService } from "../services/CommentsService";
import { BadRequest } from "../utils/Errors";

export class CommentsController extends BaseController {

  constructor() {
    super("api/comments");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .put("/:id", this.edit)
      .post("", this.create)
      .delete("/:id", this.remove);
  }
  async remove(req, res, next) {
    try {
      let comment = await commentsService.remove(req.params.id)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let comment = await commentsService.edit(req.params.id, req.body)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let comment = await commentsService.findById(req.params.id)
      if (!comment) {
        throw new BadRequest("Invalid comment ID")
      }
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async getAll(_, res, next) {
    try {
      let comments = await commentsService.find()
      return res.send(comments);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let comment = await commentsService.create(req.body)
      res.send(comment);
    } catch (error) {
      next(error);
    }
  }
}
