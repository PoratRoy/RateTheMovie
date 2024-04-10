import { Document } from "mongodb";
import { IActor, IDirector, IMovie, IPlayer } from "../interfaces/scheme";

export type MovieModelSchema = Omit<IMovie, "_id"> & Document;
export type ActorModelSchema = Omit<IActor, "_id"> & Document;
export type DirectorModelSchema = Omit<IDirector, "_id"> & Document;
export type PlayerModelSchema = Omit<IPlayer, "_id"> & Document;
