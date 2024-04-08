import { useEffect, useState } from "react";
import useMod from "../gameplay/useMod";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { useSocketContext } from "../../context/SocketContext";
import { useAnimationContext } from "../../context/AnimationContext";
import { CardFace } from "../../models/enums/animation";
import { START_GAME_TIME } from "../../models/constant/time";

const useWaitingRoom = () => {
    const { fetchLoading, gameCards, currentPlayer, game, setIsGameStart } = useGamePlayContext();
    const { setIsFlipCard } = useAnimationContext();
    const { rivalPlayers } = useSocketContext();
    const [timerExpired, setTimerExpired] = useState<boolean>(false);
    const [isWaiting, setIsWaiting] = useState<boolean>(true);
    const { isMulti, isSingle } = useMod();

    useEffect(() => {
        if (isMulti() && currentPlayer?.role === "host") {
            if (
                rivalPlayers &&
                rivalPlayers.length >= 1 &&
                fetchLoading === false &&
                gameCards[0]?.id !== undefined
            ) {
                setIsWaiting(rivalPlayers.length === 0 ? true : false);
            }
        }
    }, [rivalPlayers, fetchLoading, gameCards]);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        let isMounted = true;

        const startTimer = () => {
            setTimerExpired(false);
            if (isSingle() && !game?.isGameStart) {
                timer = setTimeout(() => {
                    if (isMounted) {
                        setTimerExpired(true);
                    }
                }, START_GAME_TIME);
            }
        };

        startTimer();

        return () => {
            isMounted = false;
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        let isMounted = true;

        const startGame = () => {
            setIsGameStart(true);
            setIsFlipCard(CardFace.BACK);
            timer = setTimeout(() => {
                if (isMounted) {
                    setIsFlipCard(CardFace.FRONT);
                }
            }, 200);
        };

        if (fetchLoading === false && timerExpired) startGame();

        return () => {
            isMounted = false;
            clearTimeout(timer);
        };
    }, [fetchLoading, timerExpired]);

    return { isWaiting };
};

export default useWaitingRoom;
