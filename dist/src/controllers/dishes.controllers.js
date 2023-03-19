"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeDish = exports.removeDishes = exports.addDishes = exports.getAllDishes = void 0;
const dishes_services_1 = require("../services/dishes.services");
const getAllDishes = async (req, res) => {
    try {
        const dishes = await (0, dishes_services_1.getDishes)();
        return res
            .status(200)
            .json(dishes);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.getAllDishes = getAllDishes;
const addDishes = async (req, res) => {
    try {
        const dishes = (0, dishes_services_1.createDish)(req.body);
        return res
            .status(200)
            .json({
            status: 200,
            data: dishes,
            message: "Successfully Created Dish",
        });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.addDishes = addDishes;
const removeDishes = async (req, res) => {
    try {
        const dishes = (0, dishes_services_1.deleteDish)(req.body);
        return res
            .status(200)
            .json({
            status: 200,
            data: dishes,
            message: "Successfully Removed Dish",
        });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.removeDishes = removeDishes;
const changeDish = async (req, res) => {
    try {
        const dish = (0, dishes_services_1.updateDish)(req.body._id, req.body);
        return res
            .status(200)
            .json({
            status: 200,
            data: dish,
            message: "Successfully Update Dish",
        });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.changeDish = changeDish;
