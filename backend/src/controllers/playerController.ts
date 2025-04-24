import { Request, Response } from "express";
import Player from "../models/Player";

export const getAllPlayers = async (req: Request, res: Response) => {
  const players = await Player.find();
  res.json(players);
};

export const createPlayer = async (req: Request, res: Response) => {
  const player = await Player.create(req.body);
  res.status(201).json(player);
};
