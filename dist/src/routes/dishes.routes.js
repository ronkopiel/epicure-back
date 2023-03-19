"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dishes_controllers_1 = require("../controllers/dishes.controllers");
var bcrypt = require("bcrypt");
const router = express_1.default.Router();
router.get("/", dishes_controllers_1.getAllDishes);
router.post("/", dishes_controllers_1.addDishes);
router.delete("/", dishes_controllers_1.removeDishes);
router.put("/", dishes_controllers_1.changeDish);
exports.default = router;
