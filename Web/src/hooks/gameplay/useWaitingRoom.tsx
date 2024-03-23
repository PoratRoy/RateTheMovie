import { useEffect, useState } from "react";
import useMod from "./useMod";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { useSocketContext } from "../../context/SocketContext";
import { useAnimationContext } from "../../context/AnimationContext";
import { CardFace } from "../../models/enums/animation";
import { useGameStatusContext } from "../../context/GameStatusContext";
import { START_GAME_TIME } from "../../models/constant";

const useWaitingRoom = () => {
    const { fetchLoading, gameCards, currentPlayer } = useGamePlayContext();
    const { setIsGameStart } = useGameStatusContext();
    const { setIsFlipCard } = useAnimationContext();
    const { rivalPlayers } = useSocketContext();
    const [timerExpired, setTimerExpired] = useState<boolean>(false);
    const [isWaiting, setIsWaiting] = useState<boolean>(true);
    const { isMulti, isSingle } = useMod();

    useEffect(() => {
        if (isMulti() && currentPlayer?.role === "host") {
            if (
                rivalPlayers.length >= 1 &&
                fetchLoading === false &&
                gameCards[0]?.id !== undefined
            ) {
                setIsWaiting(rivalPlayers.length === 0 ? true : false);
            }
        }
    }, [rivalPlayers, fetchLoading, gameCards]);

    useEffect(() => {
        let timer1: ReturnType<typeof setTimeout>;
        let timer2: ReturnType<typeof setTimeout>;
        let isMounted = true;

        const startTimer = async () => {
            setTimerExpired(false);
            if (isSingle()) {
                await Promise.all([
                    (timer1 = setTimeout(() => {
                        if (isMounted) {
                            setTimerExpired(true);
                            setIsGameStart(true);
                        }
                    }, START_GAME_TIME)),

                    (timer2 = setTimeout(() => {
                        if (isMounted) {
                            setIsFlipCard(CardFace.FRONT);
                        }
                    }, START_GAME_TIME + 200)),
                ]);
            }
        };

        startTimer();

        return () => {
            isMounted = false;
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    useEffect(() => {
        if (fetchLoading === false && timerExpired) {
            setIsGameStart(true);
            setIsFlipCard(CardFace.FRONT);
        }
    }, [fetchLoading]);

    return { isWaiting };
};

export default useWaitingRoom;
