"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRestaurant = exports.deleteRestaurant = exports.createRestaurant = exports.getRestaurants = void 0;
const restaurants_model_1 = require("../../src/models/restaurants.model");
const getRestaurants = async () => {
    try {
        const restaurants = await restaurants_model_1.restaurantModel.find();
        return restaurants;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.getRestaurants = getRestaurants;
const createRestaurant = async (restaurant) => {
    const _restaurant = new restaurants_model_1.restaurantModel(restaurant);
    try {
        await _restaurant.save();
        return _restaurant;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.createRestaurant = createRestaurant;
const deleteRestaurant = async (restaurantID) => {
    try {
        await restaurants_model_1.restaurantModel.findByIdAndDelete(restaurantID);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.deleteRestaurant = deleteRestaurant;
const updateRestaurant = async (id, restaurant) => {
    try {
        const _restaurant = await restaurants_model_1.restaurantModel.findByIdAndUpdate(id, restaurant);
        if (_restaurant) {
            return (_restaurant);
        }
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.updateRestaurant = updateRestaurant;
