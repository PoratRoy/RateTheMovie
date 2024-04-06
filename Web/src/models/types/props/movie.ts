import { Movie } from "../movie";
import { Player } from "../player";
import { CardAnimation, CardSize } from "../union";

export type MovieProps = {
    movie?: Movie;
    size: CardSize;
    actions?: CardAnimation[];
    isShadow?: boolean;
};

export type DraggableMovieProps = {
    id: string;
    movie: Movie;
    player: Player;
    size?: CardSize;
    disabled?: boolean;
};
