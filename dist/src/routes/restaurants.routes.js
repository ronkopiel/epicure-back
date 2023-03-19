"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restaurants_controllers_1 = require("../controllers/restaurants.controllers");
var bcrypt = require("bcrypt");
const router = express_1.default.Router();
router.get("/", restaurants_controllers_1.getAllRestaurants);
router.post("/", restaurants_controllers_1.addRestaurants);
router.delete("/", restaurants_controllers_1.removeRestaurants);
router.put("/", restaurants_controllers_1.changeRestaurant);
exports.default = router;
