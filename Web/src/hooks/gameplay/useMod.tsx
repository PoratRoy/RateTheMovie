import { useGamePlayContext } from "../../context/GamePlayContext";
import { ModOption } from "../../models/enums/landing";

const useMod = () => {
    const { game } = useGamePlayContext();

    const isMulti = (mod?: ModOption) => {
        const gameMod = mod || game?.mod;
        return gameMod === ModOption.MULTI ? true : false;
    };

    const isSingle = (mod?: ModOption) => {
        const gameMod = mod || game?.mod;
        return gameMod === ModOption.SINGLE ? true : false;
    };

    const isNoneMode = (mod?: ModOption) => {
        const gameMod = mod || game?.mod;
        return gameMod === ModOption.NONE ? true : false;
    };

    return { isSingle, isMulti, isNoneMode };
};
export default useMod;
