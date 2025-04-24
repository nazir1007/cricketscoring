"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const scoreController_1 = require("../controllers/scoreController");
const router = express_1.default.Router();
router.post("/submit-ball", scoreController_1.submitBall);
exports.default = router;
