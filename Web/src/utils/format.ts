export const datePattern = /^\d{4}-\d{2}-\d{2}$/;

export const movieRating = (rating: string) => parseFloat(rating || "0");

//TODO: not in use
export const formatDate = (dateS: string) => {
    const parts = dateS.split("-");
    const formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
    return formattedDate;
};

export const extractRoomId = (roomLink: string) => {
    return roomLink.substring(roomLink.lastIndexOf("/") + 1);
};

export const formatShortNumber = (number: number) => {
    const absNumber = Math.abs(number);
    const suffixes = ["", "k", "m", "b", "t"];
    const suffixNum = Math.floor(("" + absNumber).length / 3);
    let shortNumber = "";

    if (suffixNum > 0) {
        shortNumber = (absNumber / Math.pow(1000, suffixNum)).toFixed(1) + suffixes[suffixNum];
    } else {
        shortNumber = "" + absNumber;
    }

    return shortNumber;
};
