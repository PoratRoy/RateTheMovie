import mongoose, { Schema } from "mongoose";
import { IActor } from "../interfaces/scheme";

const ActorSchema = new Schema<IActor>({
    name: { type: String, required: true },
    img: { type: String, required: true },
    job: { type: String, required: true },
});

const ActorModel = mongoose.model<IActor>("Actors", ActorSchema);
export default ActorModel;

