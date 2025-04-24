import express from "express";
import { getAllPlayers, createPlayer } from "../controllers/playerController";

const router = express.Router();

router.get("/", getAllPlayers);
router.post("/", createPlayer);

export default router;
