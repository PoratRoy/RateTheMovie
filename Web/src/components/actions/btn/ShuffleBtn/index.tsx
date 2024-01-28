import React from "react";
import { GiCardExchange } from "react-icons/gi";
import style from "./ShuffleBtn.module.css";
import useDiscoverMovies from "../../../../api/hooks/useDiscoverMovies";
import Session from "../../../../utils/sessionStorage";
import { SessionKey } from "../../../../models/enums/session";

const ShuffleBtn: React.FC = () => {
    const { discoverMovies } = useDiscoverMovies(true);

    const handleShuffle = () => {
        const filters = Session.get(SessionKey.FILTERS);
        discoverMovies(filters);
    };

    return (
        <div onClick={handleShuffle} className={style.shuffleBtn}>
            <GiCardExchange />
        </div>
    );
};

export default ShuffleBtn;
