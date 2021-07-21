import { Schema } from "mongoose";

export interface LocationNeeds {
    soilQuality: string[],
    soilHumidity: string[],
    sunlight: string[],
    wind: string[],
}

export const LocationNeedsSchema = new Schema({
    soilQuality: [{
        type: string,
        enum: ["rich in humus", "calcareous", "clayey", "sandy", "gravelly"],
    }],
    soilHumidity: [{
        type: string,
        enum: ["dry", "wet"],
    }],
    sunlight: [{
        type: string,
        enum: ["sunny", "partial shade", "shade"],
    }],
    wind: [{
        type: string,
        enum: ["sheltered", "not sheltered"],
        default: ["sheltered", "not sheltered"],
    }],
})