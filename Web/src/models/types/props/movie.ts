import { CardAnimation } from "../../enums/animation";
import { Movie } from "../movie";
import { Player } from "../player";
import { CardSize } from "../union";

export type MovieProps = {
    movie: Movie;
    isShadow: boolean | undefined;
    size: CardSize;
    actions?: CardAnimation[];
};

export type DraggableMovieProps = {
    id: string;
    movie: Movie;
    player: Player;
    isShadow?: boolean;
    size?: CardSize;
};
