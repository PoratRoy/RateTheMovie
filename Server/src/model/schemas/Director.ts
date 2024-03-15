import mongoose, { Schema } from "mongoose";
import { IDirector } from "../interfaces/scheme";

const DirectorSchema = new Schema<IDirector>({
    name: { type: String, required: true },
    img: { type: String, required: true },
    job: { type: String, required: true },
});

const DirectorModel = mongoose.model<IDirector>("Directors", DirectorSchema);
export default DirectorModel;
