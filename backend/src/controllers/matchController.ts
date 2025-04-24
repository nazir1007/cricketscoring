import { Request, Response } from "express";
import Match from "../models/Match";

export const getAllMatches = async (req: Request, res: Response) => {
  const matches = await Match.find();
  res.json(matches);
};

export const createMatch = async (req: Request, res: Response) => {
  const match = await Match.create(req.body);
  res.status(201).json(match);
};
