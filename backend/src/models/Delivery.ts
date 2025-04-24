import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema({
  matchId: { type: mongoose.Schema.Types.ObjectId, ref: "Match" },
  innings: Number,
  over: Number,
  ball: Number,
  batsman: { type: mongoose.Schema.Types.ObjectId, ref: "Player" },
  bowler: { type: mongoose.Schema.Types.ObjectId, ref: "Player" },
  runs: Number,
  type: String,
  subtype: String,
  extras: Object,
  isWicket: Boolean,
  wicketDetails: Object
});

export default mongoose.model("Delivery", deliverySchema);
