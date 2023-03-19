"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDish = exports.deleteDish = exports.createDish = exports.getDishes = void 0;
const dishes_model_1 = require("../../src/models/dishes.model");
const getDishes = async () => {
    try {
        const dishes = await dishes_model_1.dishModel.find();
        return dishes;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.getDishes = getDishes;
const createDish = async (dish) => {
    const _dish = new dishes_model_1.dishModel(dish);
    try {
        await _dish.save();
        return _dish;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.createDish = createDish;
const deleteDish = async (dishID) => {
    try {
        await dishes_model_1.dishModel.findByIdAndDelete(dishID);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.deleteDish = deleteDish;
const updateDish = async (id, dish) => {
    try {
        const _dish = await dishes_model_1.dishModel.findByIdAndUpdate(id, dish);
        if (_dish) {
            return (_dish);
        }
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.updateDish = updateDish;
