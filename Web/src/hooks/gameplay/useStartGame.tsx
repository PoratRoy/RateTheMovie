import { useEffect, useRef, useState } from "react";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { useSocketContext } from "../../context/SocketContext";
import useMod from "./useMod";

const useStartGame = () => {
    const { fetchLoading, gameCards, currentPlayer } = useGamePlayContext();
    const { rivalPlayers, setStartGame } = useSocketContext();
    const { isMulti, isSingle } = useMod();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const isGameRef = useRef<boolean>(true);

    useEffect(() => {
        if (isMulti() && currentPlayer?.role === "host") {
            if (
                rivalPlayers.length >= 1 &&
                fetchLoading === false &&
                gameCards[0].id !== undefined
            ) {
                setIsLoading(rivalPlayers.length === 0 ? true : false);
            }
        }
    }, [rivalPlayers, fetchLoading, gameCards]);

    useEffect(() => {
        if (isSingle()) {
            if (gameCards[0].id === undefined) {
                const timeoutId = setTimeout(() => {
                    if (isGameRef.current === false) {
                        setStartGame(true);
                    }
                }, 3000);
                return () => clearTimeout(timeoutId);
            } else {
                setStartGame(true);
            }
        }
    }, [isGameRef.current]);

    useEffect(() => {
        isGameRef.current = fetchLoading;
    }, [fetchLoading]);

    return { isLoading };
};

export default useStartGame;
