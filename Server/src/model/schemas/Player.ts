import mongoose, { Schema } from "mongoose";
import { PlayerModelSchema } from "../types/schemas";

const PlayerSchema = new Schema<PlayerModelSchema>(
    {
        name: { type: String, required: true },
        avaterId: { type: Number, required: true },
        score: { type: Number, required: true },
        rank: { type: Number, required: true },
    },
    {
        versionKey: false,
        timestamps: false,
    },
);

const PlayerModel = mongoose.model<PlayerModelSchema>("Players", PlayerSchema);
export default PlayerModel;
