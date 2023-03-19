"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeRestaurant = exports.removeRestaurants = exports.addRestaurants = exports.getAllRestaurants = void 0;
const restaurants_services_1 = require("../services/restaurants.services");
const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await (0, restaurants_services_1.getRestaurants)();
        return res
            .status(200)
            .json(restaurants);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.getAllRestaurants = getAllRestaurants;
const addRestaurants = async (req, res) => {
    try {
        const restaurants = (0, restaurants_services_1.createRestaurant)(req.body);
        return res
            .status(200)
            .json({
            status: 200,
            data: restaurants,
            message: "Successfully Create Restaurant",
        });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.addRestaurants = addRestaurants;
const removeRestaurants = async (req, res) => {
    try {
        const restaurants = (0, restaurants_services_1.deleteRestaurant)(req.body);
        return res
            .status(200)
            .json({
            status: 200,
            data: restaurants,
            message: "Successfully Remove Restaurant",
        });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.removeRestaurants = removeRestaurants;
const changeRestaurant = async (req, res) => {
    try {
        const restaurants = (0, restaurants_services_1.updateRestaurant)(req.body._id, req.body);
        return res
            .status(200)
            .json({
            status: 200,
            data: restaurants,
            message: "Successfully Update Restaurant",
        });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.changeRestaurant = changeRestaurant;
