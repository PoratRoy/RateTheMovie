export const movieRating = (rating: string) => parseFloat(rating || "0");

export const extractRoomId = (roomLink: string) => {
    return roomLink.substring(roomLink.lastIndexOf("/") + 1);
};
