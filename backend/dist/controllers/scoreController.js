"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitBall = void 0;
const Match_1 = __importDefault(require("../models/Match"));
const Player_1 = __importDefault(require("../models/Player"));
const Delivery_1 = __importDefault(require("../models/Delivery"));
const submitBall = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    try {
        yield Delivery_1.default.create(payload);
        const match = yield Match_1.default.findById(payload.matchId);
        if (!match) {
            res.status(404).json({ error: "Match not found" });
            return;
        }
        const totalRuns = payload.runs +
            payload.extras.noball +
            payload.extras.wide +
            payload.extras.legbye +
            payload.extras.bye +
            payload.extras.overthrow;
        match.totalRuns += totalRuns;
        const batsman = yield Player_1.default.findById(payload.batsman);
        if (batsman) {
            if (payload.type === "normal" || payload.type === "wicket") {
                batsman.runs += payload.runs;
                batsman.ballsFaced += 1;
            }
            if (payload.type === "noball") {
                batsman.ballsFaced += 1;
                if (payload.runs > 0)
                    batsman.runs += payload.runs - 1;
            }
        }
        const bowler = yield Player_1.default.findById(payload.bowler);
        if (bowler) {
            let runsConceded = totalRuns;
            if (payload.type === "wide" || payload.type === "noball") {
                runsConceded = totalRuns;
            }
            bowler.runsConceded += runsConceded;
            if (payload.type !== "wide" && payload.type !== "noball") {
                bowler.ballsBowled += 1;
            }
            if (payload.isWicket) {
                bowler.wickets += 1;
            }
        }
        yield Promise.all([match.save(), batsman === null || batsman === void 0 ? void 0 : batsman.save(), bowler === null || bowler === void 0 ? void 0 : bowler.save()]);
        res.status(200).json({ message: "Ball recorded and stats updated!" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong!" });
    }
});
exports.submitBall = submitBall;
