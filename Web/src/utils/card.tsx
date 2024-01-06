import CardSlice from "../components/cards/core/CardSlice";
import PackWrapper from "../components/cards/pack/PackWrapper";
import ShadowPlayerCard from "../components/cards/singel/ShadowPlayerCard";
import { PLAYER1_ID, PLAYER2_ID } from "../models/constants";
import { Player } from "../models/types/player";

export const getCorrectPlayers = (players: Player[], index: number, id: string) => {
    let selectedPlayers: string[] = [];
    const player1MovieId = players[0]?.selectedCards[index]?.movie?.id;
    const player2MovieId = players[1]?.selectedCards[index]?.movie?.id;
    switch (players.length) {
        case 2:
            if (id === player1MovieId) {
                selectedPlayers.push(PLAYER1_ID);
            }
            if (id === player2MovieId) {
                selectedPlayers.push(PLAYER2_ID);
            }
            break;

        case 1:
            if (id === player1MovieId) {
                selectedPlayers.push(PLAYER1_ID);
            }
            break;
    }
    return selectedPlayers;
};

export const getAbove = (players: Player[], index: number) => {
    let above: React.ReactNode;
    const player1Movie = players[0]?.selectedCards[index]?.movie;
    const player2Movie = players[1]?.selectedCards[index]?.movie;
    switch (players.length) {
        case 2:
            above = (
                <PackWrapper>
                    <ShadowPlayerCard id={PLAYER1_ID} movie={player1Movie} />
                    <ShadowPlayerCard id={PLAYER2_ID} movie={player2Movie} />
                </PackWrapper>
            );
            break;

        case 1:
            above = (
                <PackWrapper>
                    <ShadowPlayerCard id={PLAYER1_ID} movie={player1Movie} />
                </PackWrapper>
            );
            break;
    }
    return above;
};

export const getCardFront = (players: Player[], index: number) => {
    let front: React.ReactNode;
    const player1 = players[0];
    const player2 = players[1];
    switch (players.length) {
        case 2:
            front = (
                <PackWrapper>
                    <CardSlice player={player1} side="right" index={index} />
                    <CardSlice player={player2} side="left" index={index} />
                </PackWrapper>
            );
            break;
        case 1:
            front = (
                <PackWrapper>
                    <CardSlice player={player1} side="all" index={index} />
                </PackWrapper>
            );
            break;
    }
    return front;
};
