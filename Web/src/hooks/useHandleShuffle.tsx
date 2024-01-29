import useDiscoverMovies from "../api/hooks/useDiscoverMovies";
import { SessionKey } from "../models/enums/session";
import Session from "../utils/sessionStorage";
import useClear from "./useClear";

const useHandleShuffle = () => {
    const { discoverMovies } = useDiscoverMovies(true);
    const { handleRefresh } = useClear();

    const handleShuffle = () => {
        handleRefresh();
        const filters = Session.get(SessionKey.FILTERS);
        discoverMovies(filters);
    };

    return { handleShuffle };
};

export default useHandleShuffle;
