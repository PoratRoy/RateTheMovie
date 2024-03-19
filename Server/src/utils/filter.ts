import { Difficulty } from "../model/types/union";

export const getDifficulty = (popularity: number | undefined) => {
    if (popularity) {
        if (popularity >= 600) {
            return "easy" as Difficulty;
        } else if (popularity >= 300 && popularity < 600) {
            return "medium" as Difficulty;
        } else {
            return "hard" as Difficulty;
        }
    } else {
        return "hard" as Difficulty;
    }
};
