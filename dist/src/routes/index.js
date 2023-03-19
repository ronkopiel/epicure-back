"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chefs_routes_1 = __importDefault(require("../routes/chefs.routes"));
const dishes_routes_1 = __importDefault(require("../routes/dishes.routes"));
const restaurants_routes_1 = __importDefault(require("../routes/restaurants.routes"));
const router = express_1.default.Router();
router.use("/api/chefs", chefs_routes_1.default);
router.use("/api/dishes", dishes_routes_1.default);
router.use("/api/restaurants", restaurants_routes_1.default);
exports.default = router;
