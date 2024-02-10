import { MovieVideo, VideoModel } from "../../models/types/movie";
import { Trailer, YouTube } from "../constants";
import fetchVideo from "../fetch/fetchVideo";
import URL from "../path.json";
import { setVideoModel } from "./init";

const getMovieVideo = async (movieId: string): Promise<VideoModel | undefined> => {
    const videos: MovieVideo[] = await fetchVideo(URL.tmdb.cast, movieId);
    if (videos.length > 0) {
        const video = videos.find(
            (option: MovieVideo) => option.type === Trailer && option.site === YouTube,
        );
        if (video) {
            return setVideoModel(`${URL.youtube}${video.key}`, video.name);
        }
    }

    return undefined;
};

export default getMovieVideo;
