import express from "express";
import { getAllMatches, createMatch } from "../controllers/matchController";

const router = express.Router();

router.get("/", getAllMatches);
router.post("/", createMatch);

export default router;
