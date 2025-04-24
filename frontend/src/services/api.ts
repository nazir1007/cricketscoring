import axios from "axios";
import { DeliveryPayload } from "../types/delivery";

const API = axios.create({
  baseURL: "http://localhost:5000/api", 
});

export const fetchMatches = () => API.get("/matches");
export const fetchPlayers = () => API.get("/players");
export const submitDelivery = (data: DeliveryPayload) => API.post("/score/submit-ball", data);
