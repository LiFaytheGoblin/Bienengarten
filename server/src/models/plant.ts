import { Document, model, Model, Schema } from "mongoose";
import { ILocationNeeds, LocationNeedsSchema } from "./locationNeeds";

export interface IPlant extends Document {
    name: string,
    pollen?: number,
    nectar?: number,
    floweringStartMonth?: string,
    floweringEndMonth?: string,
    locationNeeds?: ILocationNeeds,
    vulnerableAgainst?: string[],
    protectsAgainst?: string[],
    wintergreen?: boolean,
    comment?: string,
}

const PlantSchema = new Schema({
    name: {
        type: string,
        required: true,
    },
    pollen: {
        type: number,
        min: 0,
        max: 4,
    },
    nectar: {
        number,
        min: 0,
        max: 4,
    },
    floweringStartMonth: {
        type: number,
        min: 1,
        max: 12,
    },
    floweringEndMonth: {
        type: number,
        min: 1,
        max: 12,
    },
    locationNeeds: {
        type: LocationNeedsSchema,
    },
    vulnerableAgainst: [{
        type: string,
        enum: [],
    }],
    protectsAgainst: [{
        type: string,
        enum: [],
    }],
    wintergreen: {
        type: boolean,
        default: false,
    },
    comment: {
        type: string,
    },
});

PlantSchema.methods.getPlantsWithSimilarLocationNeeds = function(); //match location needs
PlantSchema.methods.getPlantsWithComplimentaryStrengthsAndWeaknesses = function(); //match vulnerableAgainst and protectsAgainst
PlantSchema.methods.getPlantsWithComplimentaryBeeSupplies = function(); //match nectar, pollen, flowering period
PlantSchema.methods.getPerfectPlantMatch = function(); //match all

export const Plant: Model<IPlant> = model("Plant", PlantSchema);