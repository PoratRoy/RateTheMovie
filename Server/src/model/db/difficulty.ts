import { Difficulty } from "../types/union";

export const specifyDifficulty = (difficulty: Difficulty) => {
    const difficultyCriteria =
        difficulty === "hard"
            ? {}
            : difficulty === "medium"
              ? { difficulty: { $in: ["easy", "medium"] } }
              : { difficulty: "easy" };
    return difficultyCriteria;
};
