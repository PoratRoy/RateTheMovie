import { Player } from "../../../../Common/model/player";
import { PlayerColor } from "../../../../Common/model/union";

export const initPlayer = (id: string, color: PlayerColor, name: string): Player => {
    return {
        id,
        name,
        color,
        score: 0,
        selectedCards: [],
        rightChoices: [],
    } as Player;
};
