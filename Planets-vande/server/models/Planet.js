import { Schema } from "mongoose";

export const PlanetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    biome: {
        type: String,
        default: "desert"
    },
    atmosphere: {
        type: Boolean,
        default: false
    },
    galaxyId: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, { timestamps: true, toJSON: { virtuals: true } })