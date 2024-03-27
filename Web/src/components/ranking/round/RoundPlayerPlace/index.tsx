import React from "react";
import { RankingPlayerProps } from "../../../../models/types/props/ranking";
import Place from "./Place";
import { Player } from "../../../../models/types/player";
import PlayerPlace from "./PlayerPlace";

const RoundPlayerPlace: React.FC<RankingPlayerProps> = ({ place, players }) => {
    return (
        <Place place={place} players={players}>
            {players.map((player: Player, index: number) => (
                <React.Fragment key={index}>
                    <PlayerPlace player={player} place={place} />
                </React.Fragment>
            ))}
        </Place>
    );
};

export default RoundPlayerPlace;
