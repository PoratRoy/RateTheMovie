import { Document } from "mongodb";
import { FlattenMaps, Types } from "mongoose";
import { IActor, IDirector, IMovie } from "../interfaces/scheme";

export type MovieModelSchema = Omit<IMovie, "_id"> & Document;
export type ActorModelSchema = Omit<IActor, "_id"> & Document;
export type DirectorModelSchema = Omit<IDirector, "_id"> & Document;

export type MovieOutput = FlattenMaps<MovieModelSchema> & {
    _id: Types.ObjectId;
};
export type ActorOutput = FlattenMaps<ActorModelSchema> & {
    _id: Types.ObjectId;
};
export type DirectorOutput = FlattenMaps<DirectorModelSchema> & {
    _id: Types.ObjectId;
};
