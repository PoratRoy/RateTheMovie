import { CardAnimation } from "../../enums/animation";
import { Movie } from "../movie";
import { CardSize } from "../union";

export type MovieProps = {
    movie: Movie;
    isShadow: boolean | undefined;
    size: CardSize;
    actions?: CardAnimation[];
};
