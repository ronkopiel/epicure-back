"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantModel = exports.restaurantSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
exports.restaurantSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    img: { type: String, required: true },
    openingHour: { type: Number, required: true },
    closingHour: { type: Number, required: true },
    address: { type: String, required: true },
    rating: { type: Number, required: true },
    chefID: { type: Number, required: true },
    viewCount: { type: Number, required: true },
    signatureDishID: { type: Number, required: true },
    isNewRestaurant: { type: Boolean, required: true },
    dishes: { type: [Number], required: true },
});
exports.restaurantModel = mongoose_2.default.model("restaurants", exports.restaurantSchema);
