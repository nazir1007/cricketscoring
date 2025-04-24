"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const playerSchema = new mongoose_1.default.Schema({
    name: String,
    runs: { type: Number, default: 0 },
    ballsFaced: { type: Number, default: 0 },
    runsConceded: { type: Number, default: 0 },
    ballsBowled: { type: Number, default: 0 },
    wickets: { type: Number, default: 0 }
});
exports.default = mongoose_1.default.model("Player", playerSchema);
