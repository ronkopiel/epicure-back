import express, { Request, Response } from "express";
import {
  getAllDishes, addDishes, removeDishes, changeDish
} from "../controllers/dishes.controllers"
import bcrypt from "bcrypt"

const router = express.Router();

router.get("/",getAllDishes );

router.post("/", addDishes);

router.delete("/",removeDishes );

router.put("/", changeDish);

export default router;
