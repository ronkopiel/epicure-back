"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dishModel = exports.dishSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
exports.dishSchema = new mongoose_1.Schema({
    resturantID: { type: Number, required: true },
    name: { type: String, required: true },
    ingredients: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    isSpicy: { type: Boolean, required: true },
    isVegan: { type: Boolean, required: true },
    isVegitarian: { type: Boolean, required: true },
    id: { type: Number, required: true },
    service: { type: String, required: true },
});
exports.dishModel = mongoose_2.default.model("dishes", exports.dishSchema);
