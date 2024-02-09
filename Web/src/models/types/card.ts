import { Movie } from "../../../../Common/model/movie";

export type CardType = "Elected" | "Player" | "Shadow";

export type placeholderCardType =
    | { t: "Elected"; index: number }
    | { t: "Player"; movie: Movie }
    | { t: "Shadow" };
