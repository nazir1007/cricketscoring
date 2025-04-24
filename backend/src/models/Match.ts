import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
  totalRuns: { type: Number, default: 0 },
  innings: Number,
  currentOver: Number,
  balls: Number
});

export default mongoose.model("Match", matchSchema);
