import express, { Request, Response } from "express";
import {
  getAllChefs, addChefs, removeChefs, changeChef
} from "../controllers/chefs.controllers";
import bcrypt from "bcrypt"

const router = express.Router();

router.get("/",getAllChefs );

router.post("/", addChefs);

router.delete("/",removeChefs );

router.put("/", changeChef);


export default router;
