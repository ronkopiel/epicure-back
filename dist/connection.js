"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const token = process.env.TOKEN_SECRET;
const uri = token;
const dbName = "epicure";
const connectToDB = async () => {
    try {
        await (0, mongoose_1.connect)(`${uri}${dbName}`);
        console.log("db connected");
    }
    catch (err) {
        console.log("error connecting to DB", err);
    }
};
exports.connectToDB = connectToDB;
