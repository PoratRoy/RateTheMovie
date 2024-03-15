import { Movie } from "./types/movie";

export const mockMovie: Movie = {
    title: "The Matrix",
    id: "1",
    poster_path: "/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
    imdbRating: 8.7,
    imdbID: "tt0133093",
    difficulty: "medium",
    isBoxOffice: true,
    language: "en",
    genre_ids: [28, 878],
    release_date: 1999,
    description:
        "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    video: {
        url: "https://www.youtube.com/watch?v=m8e-FF8MsqU",
        title: "The Matrix",
    },
    director: {
        name: "Lana Wachowski",
        img: "https://image.tmdb.org/t/p/w185/8Cg7S4f0wzcm0s1d8ZbPzj3qzS5.jpg",
        job: "Director",
    },
    actors: [
        {
            name: "Keanu Reeves",
            img: "https://image.tmdb.org/t/p/w185/9MgBNBqlH1sG4yG2u4XkwI5CoJa.jpg",
            job: "Actor",
        },
        {
            name: "Laurence Fishburne",
            img: "https://image.tmdb.org/t/p/w185/5Z8WWr0Lf1tInVWwJsU5Jq4v2Hw.jpg",
            job: "Actor",
        },
        {
            name: "Carrie-Anne Moss",
            img: "https://image.tmdb.org/t/p/w185/6u1fYtxG5eqjhtCPDx04pJphQRW.jpg",
            job: "Actor",
        },
    ],
};
