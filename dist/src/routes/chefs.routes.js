"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chefs_controllers_1 = require("../controllers/chefs.controllers");
var bcrypt = require("bcrypt");
const router = express_1.default.Router();
router.get("/", chefs_controllers_1.getAllChefs);
router.post("/", chefs_controllers_1.addChefs);
router.delete("/", chefs_controllers_1.removeChefs);
router.put("/", chefs_controllers_1.changeChef);
exports.default = router;
