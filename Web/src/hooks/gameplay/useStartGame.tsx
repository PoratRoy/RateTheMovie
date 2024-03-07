import { useEffect, useMemo, useState } from "react";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { useSocketContext } from "../../context/SocketContext";
import useMod from "./useMod";
import { START_TIMER } from "../../models/constant";

const useStartGame = () => {
    const { fetchLoading, gameCards, currentPlayer } = useGamePlayContext();
    const { rivalPlayers, setStartGame, startGame } = useSocketContext();
    const { isMulti, isSingle } = useMod();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [timerExpired, setTimerExpired] = useState<boolean>(false);

    const [cardLoading, setCardLoading] = useState<boolean>(true);
    const [showTimer, setShowTimer] = useState<boolean>(true);
    const timeout = useMemo(() => START_TIMER * 1000 + 500, []);

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
        let timer: ReturnType<typeof setTimeout>;
        let isMounted = true;

        const startTimer = () => {
            setTimerExpired(false);
            if (isSingle()) {
                timer = setTimeout(() => {
                    if (isMounted) {
                        setTimerExpired(true);
                        setStartGame(true);
                    }
                }, 10000);
            }
        };

        startTimer();

        return () => {
            isMounted = false;
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        if (fetchLoading === false && timerExpired) {
            setStartGame(true);
        }
    }, [fetchLoading]);

    useEffect(() => {
        if (isMulti()) {
            if (startGame) {
                setTimeout(() => {
                    setCardLoading(false);
                }, timeout);
            } else {
                setCardLoading(true);
            }
        } else {
            setShowTimer(false);
            setCardLoading(false);
        }
    }, [startGame]);

    return { isLoading, cardLoading, showTimer, closeTimer: () => setShowTimer(false) };
};

export default useStartGame;
