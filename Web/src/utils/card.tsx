import PackWrapper from "../components/cards/wrapper/PackWrapper";
import DraggableMovie from "../components/cards/singel/DraggableMovie";
import ShadowPlayerCard from "../components/cards/singel/ShadowPlayerCard";
import { PACK_CARDS_NUM, PLAYER1_ID, PLAYER2_ID } from "../models/constants";
import { Movie } from "../models/types/movie";
import { Player } from "../models/types/player";
import { CardSide } from "../models/types/union";

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

const setSlice = (player: Player, movie: Movie | undefined, side: CardSide) => {
    return movie && movie.title ? (
        <DraggableMovie
            id={`${movie.imdbID}-${player.id}`}
            movie={movie}
            player={player}
            side={side}
            size="small"
        />
    ) : (
        <div></div>
    );
};

export const getCardFront = (players: Player[], index: number) => {
    let front: React.ReactNode;
    const player1 = players[0];
    const player2 = players[1];
    const movie1 = player1?.selectedCards[index]?.movie;
    const movie2 = player2?.selectedCards[index]?.movie;
    switch (players.length) {
        case 2:
            front = (
                <PackWrapper>
                    {setSlice(player1, movie1, "right")}
                    {setSlice(player2, movie2, "left")}
                </PackWrapper>
            );
            break;
        case 1:
            front = <PackWrapper>{setSlice(player1, movie1, "all")}</PackWrapper>;
            break;
    }
    return front;
};

export const setPlaceholderText = (index: number): string | undefined => {
    if (index === 0) {
        return "Worst Rating";
    } else if (index + 1 === PACK_CARDS_NUM) {
        return "Best Rating";
    }
};
