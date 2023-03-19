"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefModel = exports.chefSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
exports.chefSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    portrait: { type: String, required: true },
    isChefOfTheWeek: { type: Boolean, required: true },
    isNewChef: { type: Boolean, required: true },
    viewCount: { type: Number, required: true },
    resturants: { type: [Number], required: true },
    id: { type: Number, required: true },
    chefDescription: { type: String, required: true }
});
exports.chefModel = mongoose_2.default.model("chefs", exports.chefSchema);
