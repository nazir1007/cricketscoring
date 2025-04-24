"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const deliverySchema = new mongoose_1.default.Schema({
    matchId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Match" },
    innings: Number,
    over: Number,
    ball: Number,
    batsman: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Player" },
    bowler: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Player" },
    runs: Number,
    type: String,
    subtype: String,
    extras: Object,
    isWicket: Boolean,
    wicketDetails: Object
});
exports.default = mongoose_1.default.model("Delivery", deliverySchema);
