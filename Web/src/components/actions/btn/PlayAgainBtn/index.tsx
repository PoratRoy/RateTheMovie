import React from "react";
import PrimaryBtn from "../../core/button/PrimaryBtn";
import Session from "../../../../utils/sessionStorage";
import { SessionKey } from "../../../../models/enums/session";
import useDiscoverMovies from "../../../../api/hooks/useDiscoverMovies";
import useClear from "../../../../hooks/useClear";

const PlayAgainBtn: React.FC = () => {
    const { discoverMovies } = useDiscoverMovies(true);
    const { handleRefresh } = useClear();

    const handleShuffle = () => {
        handleRefresh();
        const filters = Session.get(SessionKey.FILTERS);
        discoverMovies(filters);
    };

    return <PrimaryBtn title="Play Again" onClicked={handleShuffle} size="medium" />;
};

export default PlayAgainBtn;
