import React from "react";
import PrimaryBtn from "../../core/button/PrimaryBtn";
import Session from "../../../../utils/sessionStorage";
import { SessionKey } from "../../../../models/enums/session";
import useDiscoverMovies from "../../../../api/hooks/useDiscoverMovies";

const PlayAgainBtn: React.FC = () => {
    const { discoverMovies } = useDiscoverMovies(true);

    const handleShuffle = () => {
        const filters = Session.get(SessionKey.FILTERS);
        discoverMovies(filters);
    };

    return <PrimaryBtn title="Play Again" onClicked={handleShuffle} size="large" />;
};

export default PlayAgainBtn;
