import DirectorModel from "../model/schemas/Director";
import { DBCreateError, DBError } from "../libs/error";
import { Tables } from "../model/enum/database";
import { CrewModel } from "../model/types/movie";
import { IDirector } from "../model/interfaces/scheme";

export default class DirectorDatabaseService {
    public static createDirector = async (directorProps: CrewModel): Promise<IDirector> => {
        try {
            const newDirector = new DirectorModel({
                ...directorProps,
            });
            console.info(`Create new director with params: `, newDirector);
            const savedDirector = await DirectorModel.create(newDirector);
            console.info(`New director created`);
            return savedDirector.toObject();
        } catch (error) {
            throw new DBCreateError(error as string, Tables.Directors);
        }
    };

    public static getDirectorByName = async (name: string): Promise<IDirector | null> => {
        try {
            console.info(`Get director with name: ${name}`);
            const director = await DirectorModel.findOne({ name }).lean().exec();
            console.info(`Director with name ${name}: `, director);
            return director;
        } catch (error) {
            throw new DBError(error as string);
        }
    };

    public static getAllDirectors = async (): Promise<IDirector[]> => {
        try {
            console.info(`Get all directors`);
            const directors = await DirectorModel.find().lean().exec();
            console.info(`All directors: `, directors);
            return directors;
        } catch (error) {
            throw new DBError(error as string);
        }
    };
}
