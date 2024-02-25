export const datePattern = /^\d{4}-\d{2}-\d{2}$/;

export const movieRating = (rating: string) => parseFloat(rating || "0");

export const formatDate = (dateS: string) => {
    const parts = dateS.split("-");
    const formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
    return formattedDate;
};

export const extractRoomId = (roomLink: string) => {
    return roomLink.substring(roomLink.lastIndexOf("/") + 1);
};
