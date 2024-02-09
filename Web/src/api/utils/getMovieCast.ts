import { MovieCast, MovieCrew } from "../../models/types/movie";
import { Director, NUMBER_OF_ACTORS } from "../constants";
import { CrewModel } from "../../../../Common/model/movie";
import fetchCast from "../fetch/fetchCast";
import URL from "../path.json";
import { setCrewModel } from "./init";

const getMovieCast = async (
    movieId: string,
): Promise<[CrewModel[], CrewModel | undefined]> => {
    const cast = await fetchCast(URL.tmdb.cast, movieId);
    const actorsResults: MovieCast[] = cast[0];
    const crewResults: MovieCrew[] = cast[1];
    let actors: CrewModel[] = [];

    if (actorsResults.length > 0) {
        for (const actor of actorsResults) {
            if (actor.profile_path) {
                const { name, profile_path, known_for_department } = actor;
                actors.push(setCrewModel(name, profile_path, known_for_department));
            }
            if (actors.length === NUMBER_OF_ACTORS) break;
        }
    }

    if (crewResults.length > 0) {
        const result = crewResults.find( //TODO: can be more than one director
            (option: MovieCrew) => option.job === Director,
        );
        if (result && result.profile_path) {
            const { name, profile_path, job } = result;
            const director: CrewModel = setCrewModel(name, profile_path, job);
            return [actors, director];
        }
    }

    return [actors, undefined];
};

export default getMovieCast;
