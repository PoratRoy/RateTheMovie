import ActorModel from "../model/schemas/Actor";
import { DBCreateError, DBError } from "../libs/error";
import { Tables } from "../model/enum/database";
import { CrewModel } from "../model/types/movie";
import { IActor } from "../model/interfaces/scheme";

export default class ActorDatabaseService {
    public static createActor = async (actorProps: CrewModel): Promise<IActor> => {
        try {
            const newActor = new ActorModel({
                ...actorProps,
            });
            console.info(`Create new actor with params: `, newActor);
            const savedActor = await ActorModel.create(newActor);
            console.info(`New actor created`);
            return savedActor.toObject();
        } catch (error) {
            throw new DBCreateError(error as string, Tables.Actors);
        }
    };

    public static getActorByName = async (name: string): Promise<IActor | null> => {
        try {
            console.info(`Get actor with name: ${name}`);
            const actor = await ActorModel.findOne({ name }).lean().exec();
            console.info(`Actor with name ${name}: `, actor);
            return actor;
        } catch (error) {
            throw new DBError(error as string);
        }
    };

    public static getAllActors = async (): Promise<IActor[]> => {
        try {
            console.info(`Get all actors`);
            const actors = await ActorModel.find().lean().exec();
            console.info(`All actors: `, actors);
            return actors;
        } catch (error) {
            throw new DBError(error as string);
        }
    };
}
