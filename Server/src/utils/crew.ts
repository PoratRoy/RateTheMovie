import { CrewModel, MovieCast, MovieCrew } from "../model/types/movie";
import { fetchCast } from "./fetch";
import URL from "../model/constant/path.json";
import ActorDatabaseService from "../database/ActorTable";
import { Director, NUMBER_OF_ACTORS } from "../model/constant";
import DirectorDatabaseService from "../database/DirectorTable";
import { setCrewModel } from "./init";
import { delayPromise } from "./time";

export const setCrew = async (id: number) => {
    const cast: [MovieCast[], MovieCrew[]] = await fetchCast(
        `${URL.tmdb.cast}/${id}/${URL.tmdb.credits}`,
    );

    const castResults: MovieCast[] = cast[0];
    let actors: CrewModel[] = [];
    for (const actor of castResults) {
        if (actor.profile_path) {
            const { name, profile_path, known_for_department } = actor;
            const DBactor = await ActorDatabaseService.getActorByName(name);
            if (!DBactor) {
                const actorCrew = setCrewModel(name, profile_path, known_for_department);
                const newActor = await ActorDatabaseService.createActor(actorCrew);
                actors.push(newActor as CrewModel);
            }
        }
        if (actors.length === NUMBER_OF_ACTORS) break;
        await delayPromise(800);
    }

    const crewResults: MovieCrew[] = cast[1];
    let director: CrewModel | undefined;
    if (crewResults.length > 0) {
        const result = crewResults.find(
            (option: MovieCrew) => option.job === Director,
        );
        if (result && result.profile_path) {
            const { name, profile_path, job } = result;
            const DBdirector = await DirectorDatabaseService.getDirectorByName(name);
            if (!DBdirector) {
                const directorCrew = setCrewModel(name, profile_path, job);
                director = await DirectorDatabaseService.createDirector(directorCrew);
            }
        }
    }

    return { actors, director };
};
