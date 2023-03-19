import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface IRestaurant {
    id: number;
    name: string;
    img: string;
    openingHour: number;
    closingHour: number;
    address: string;
    rating: number;
    chefID: number;
    viewCount: number;
    signatureDishID:number;
    isNewRestaurant: boolean;
    dishes:number[];
}

export const restaurantSchema = new Schema<IRestaurant>({
    id: {type: Number, required:true},
    name: {type: String, required:true},
    img: {type: String, required:true},
    openingHour: {type: Number, required:true},
    closingHour: {type: Number, required:true},
    address: {type: String, required:true},
    rating: {type: Number, required:true},
    chefID: {type: Number, required:true},
    viewCount: {type: Number, required:true},
    signatureDishID:{type: Number, required:true},
    isNewRestaurant: {type: Boolean, required:true},
    dishes: {type: [Number], required:true},
})

export const restaurantModel = mongoose.model<IRestaurant>("restaurants", restaurantSchema);