import React from "react";
import style from "./SelectedCard.module.css";

import Card from "../../core/Card";
import Img from "../../core/Img";
import PlaceholderIcon from "../../core/PlaceholderIcon";

const SelectedCard: React.FC = () => {
    const title = "Tenacious D in The Pick of Destiny";
    const src =
        "https://m.media-amazon.com/images/M/MV5BMTc2NGI0NjktZjM5Ny00ZjEwLTliMDItOGE1ZjQzYjRkNzMwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_SX300.jpg";

    return <Card>{false ? <Img alt={title} src={src} /> : <PlaceholderIcon />}</Card>;
};

export default SelectedCard;
