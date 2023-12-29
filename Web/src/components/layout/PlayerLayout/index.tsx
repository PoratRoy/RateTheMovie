import React from "react";
import PackOfCards from "../../cards/pack/PackOfCards";
import Score from "../../actions/Score";
import { PlayerLayoutProps } from "../../../models/types/props";

const PlayerLayout: React.FC<PlayerLayoutProps> = ({ player }) => {
    return (
        <section>
            <PackOfCards player={player}/>
            <Score score={player.score} />
        </section>
    );
};

export default PlayerLayout;
