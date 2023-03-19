"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeChef = exports.removeChefs = exports.addChefs = exports.getAllChefs = void 0;
const chefs_services_1 = require("../services/chefs.services");
const getAllChefs = async (req, res) => {
    try {
        const chefs = await (0, chefs_services_1.getChefs)();
        return res
            .status(200)
            .json(chefs);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.getAllChefs = getAllChefs;
const addChefs = async (req, res) => {
    try {
        const chefs = (0, chefs_services_1.createChef)(req.body);
        return res
            .status(200)
            .json({
            status: 200,
            data: chefs,
            message: "Successfully Created Chef",
        });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.addChefs = addChefs;
const removeChefs = async (req, res) => {
    try {
        const chefs = (0, chefs_services_1.deleteChef)(req.body);
        return res
            .status(200)
            .json({
            status: 200,
            data: chefs,
            message: "Successfully Removed Chef",
        });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.removeChefs = removeChefs;
const changeChef = async (req, res) => {
    try {
        const chefs = (0, chefs_services_1.updateChef)(req.body._id, req.body);
        return res
            .status(200)
            .json({
            status: 200,
            data: chefs,
            message: "Successfully Update Studant",
        });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.changeChef = changeChef;
