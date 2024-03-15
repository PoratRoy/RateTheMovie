import { MovieVideo, VideoModel } from "../model/types/movie";
import { fetchVideo } from "./fetch";
import URL from "../model/constant/path.json";
import { Trailer, YouTube } from "../model/constant";
import { setVideoModel } from "./init";

export const setVideo = async (id: number) => {
    const videoResults: MovieVideo[] = await fetchVideo(URL.tmdb.cast, id);
    let video: VideoModel | undefined;
    if (videoResults.length > 0) {
        const v = videoResults.find(
            (option: MovieVideo) => option.type === Trailer && option.site === YouTube,
        );
        if (v && v.key && v.name) video = setVideoModel(`${URL.youtube}${v.key}`, v.name);
    }
    return video;
};
