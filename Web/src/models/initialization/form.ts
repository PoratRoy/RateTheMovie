import { SetupInputs } from "../types/form";

export const setupInputs: SetupInputs = {
    name: {
        type: "text",
        id: "name",
        placeholder: "Nickname",
    },
    rounds: {
        id: "rounds",
        type: "number",
    },
    avatar:{
        id: "avatar",
        type: "number",
    },
    difficulty:{
        id: "difficulty",
        type: "text",
    }
};