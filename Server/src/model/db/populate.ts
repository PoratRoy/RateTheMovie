export const populateMovie = [
    {
        $lookup: {
            from: "actors",
            localField: "actors",
            foreignField: "_id",
            as: "actorDetails",
        },
    },
    {
        $addFields: {
            actors: "$actorDetails",
        },
    },
    {
        $lookup: {
            from: "directors",
            localField: "director",
            foreignField: "_id",
            as: "directorDetails",
        },
    },
    {
        $addFields: {
            director: {
                $arrayElemAt: ["$directorDetails", 0],
            },
        },
    },
    {
        $project: {
            actorDetails: 0,
            directorDetails: 0,
            "director.__v": 0,
            "actors.__v": 0,
        },
    },
];
