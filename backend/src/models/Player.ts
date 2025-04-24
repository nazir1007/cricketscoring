import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  name: String,
  runs: { type: Number, default: 0 },
  ballsFaced: { type: Number, default: 0 },
  runsConceded: { type: Number, default: 0 },
  ballsBowled: { type: Number, default: 0 },
  wickets: { type: Number, default: 0 }
});

export default mongoose.model("Player", playerSchema);
