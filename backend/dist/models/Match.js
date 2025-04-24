"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const matchSchema = new mongoose_1.default.Schema({
    totalRuns: { type: Number, default: 0 },
    innings: Number,
    currentOver: Number,
    balls: Number
});
exports.default = mongoose_1.default.model("Match", matchSchema);
