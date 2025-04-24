import express from "express";
import {
  submitBall,
  getDeliveriesByMatch,
  deleteDelivery,
  updateDelivery,
} from "../controllers/scoreController";

const router = express.Router();

router.post("/submit-ball", submitBall);
router.get("/deliveries/:matchId", getDeliveriesByMatch);
router.delete("/delivery/:id", deleteDelivery);
router.put("/delivery/:id", updateDelivery);

export default router;
