"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateChef = exports.deleteChef = exports.createChef = exports.getChefs = void 0;
const chefs_model_1 = require("../../src/models/chefs.model");
const getChefs = async () => {
    try {
        const chefs = await chefs_model_1.chefModel.find();
        return chefs;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.getChefs = getChefs;
const createChef = async (chef) => {
    const _chef = new chefs_model_1.chefModel(chef);
    try {
        await _chef.save();
        return _chef;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.createChef = createChef;
const deleteChef = async (chefID) => {
    try {
        await chefs_model_1.chefModel.findByIdAndDelete(chefID);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.deleteChef = deleteChef;
const updateChef = async (id, chef) => {
    try {
        const _chef = await chefs_model_1.chefModel.findByIdAndUpdate(id, chef);
        if (_chef) {
            return (_chef);
        }
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.updateChef = updateChef;
