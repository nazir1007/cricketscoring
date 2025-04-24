import { Request, Response } from "express";
import { ScoringEvent } from "../types/ScoringEvent";
import Match from "../models/Match";
import Player from "../models/Player";
import Delivery from "../models/Delivery";

export const submitBall = async (req: Request, res: Response) => {
  const payload: ScoringEvent = req.body;
  try {
    await Delivery.create(payload);

    const match = await Match.findById(payload.matchId);
    if (!match) {
      res.status(404).json({ error: "Match not found" });
      return;
    }

    const totalRuns =
      payload.runs +
      payload.extras.noball +
      payload.extras.wide +
      payload.extras.legbye +
      payload.extras.bye +
      payload.extras.overthrow;

    match.totalRuns += totalRuns;

    const batsman = await Player.findById(payload.batsman);
    if (batsman) {
      if (payload.type === "normal" || payload.type === "wicket") {
        batsman.runs += payload.runs;
        batsman.ballsFaced += 1;
      }
      if (payload.type === "noball") {
        batsman.ballsFaced += 1;
        if (payload.runs > 0) batsman.runs += payload.runs - 1;
      }
    }

    const bowler = await Player.findById(payload.bowler);
    if (bowler) {
      let runsConceded = totalRuns;
      if (payload.type === "wide" || payload.type === "noball") {
        runsConceded = totalRuns;
      }
      bowler.runsConceded += runsConceded;
      if (payload.type !== "wide" && payload.type !== "noball") {
        bowler.ballsBowled += 1;
      }
      if (payload.isWicket) {
        bowler.wickets += 1;
      }
    }

    await Promise.all([match.save(), batsman?.save(), bowler?.save()]);
    res.status(200).json({ message: "Ball recorded and stats updated!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong!" });
  }
};


export const getDeliveriesByMatch = async (req: Request, res: Response) => {
  const deliveries = await Delivery.find({ matchId: req.params.matchId });
  res.json(deliveries);
};

export const deleteDelivery = async (req: Request, res: Response) => {
  await Delivery.findByIdAndDelete(req.params.id);
  res.status(204).send();
};

export const updateDelivery = async (req: Request, res: Response) => {
  const updated = await Delivery.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

