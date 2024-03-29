import { Difficulty, LanguageType } from "../model/types/union";
import { currentYear } from "./time";

export const getDifficulty = (
    popularity: number | undefined,
    isBoxOffice: boolean,
    original_language: string,
    imdbRating: string,
    year: string,
) => {
    const rating = parseFloat(imdbRating);
    const language = original_language as LanguageType;
    const release_date = parseInt(year);
    const date = currentYear - 1;
    const isEnglish = language === "en";
    const popularityOrCheck = (orCheck: boolean, popularityNum: number) => {
        return popularity ? orCheck || popularity >= popularityNum : orCheck;
    };

    if ((isEnglish && rating >= 5 && popularityOrCheck(isBoxOffice, 700)) || rating >= 8.5) {
        return "easy" as Difficulty;
    } else if (isEnglish && rating >= 3 && popularityOrCheck(date <= release_date, 400)) {
        return "medium" as Difficulty;
    } else {
        return "hard" as Difficulty;
    }
};
