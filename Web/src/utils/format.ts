export const datePattern = /^\d{4}-\d{2}-\d{2}$/;

export const movieRating = (rating: string) => parseFloat(rating || "0");
