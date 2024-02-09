export type Movie = {
  title: string;
  id: string;
  poster_path: string;
  imdbRating: string;
  imdbID?: string;
  genre_ids?: number[];
  release_date?: string;
  video?: VideoModel;
  actors: CrewModel[];
  director?: CrewModel;
  description?: string;
};

export type CrewModel = {
  name: string;
  img: string;
  job: string;
};

export type VideoModel = {
  url: string;
  title: string;
};
