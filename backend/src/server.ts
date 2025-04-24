import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongoose";
import scoreRoutes from "./routes/scoreRoutes";
import matchRoutes from "./routes/matchRoutes";
import playerRoutes from "./routes/playerRoutes";
import cors from "cors";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use("/api/score", scoreRoutes);
app.use("/api/match", matchRoutes);
app.use("/api/player", playerRoutes);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
