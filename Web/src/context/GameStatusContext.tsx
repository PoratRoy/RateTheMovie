import { createContext, useContext, useState } from "react";
import { GameStatus, WaitingRoom } from "../models/types/gameStatus";
import { initGameStatus, initWaitingRoom } from "../models/initialization/gameStatus";

export const GameStatusContext = createContext<{
    gameStatus: GameStatus;
    waitingRoom: WaitingRoom;
    setWaitingRoom: React.Dispatch<React.SetStateAction<WaitingRoom>>;
    activateTimer: boolean;
    setActivateTimer: React.Dispatch<React.SetStateAction<boolean>>;
    isPreview: boolean;
    setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
    setIsGameStart: (isGameStart: boolean) => void;
    setIsRoundStart: (isRoundStart: boolean) => void;
    setIsPlayerFinishRound: (isPlayerFinishRound: boolean) => void;
    setIsRoundFinished: (isRoundFinished: boolean) => void;
    setIsGameOver: (isGameOver: boolean) => void;
    setWaitingIsWaiting: (isWaiting: boolean) => void;
    resetGameStatusContext: () => void;
    clearGameStatusContext: () => void;
}>({
    gameStatus: initGameStatus,
    waitingRoom: initWaitingRoom,
    setWaitingRoom: () => {},
    activateTimer: true,
    isPreview: false,
    setIsPreview: () => {},
    setActivateTimer: () => {},
    setIsGameStart: () => {},
    setIsRoundStart: () => {},
    setIsPlayerFinishRound: () => {},
    setIsRoundFinished: () => {},
    setIsGameOver: () => {},
    setWaitingIsWaiting: () => {},
    resetGameStatusContext: () => {},
    clearGameStatusContext: () => {},
});

export const useGameStatusContext = () => useContext(GameStatusContext);

export const GameStatusContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [gameStatus, setGameStatus] = useState<GameStatus>(initGameStatus);
    const [waitingRoom, setWaitingRoom] = useState<WaitingRoom>(initWaitingRoom);
    const [activateTimer, setActivateTimer] = useState<boolean>(true);
    const [isPreview, setIsPreview] = useState<boolean>(false);

    const setIsGameStart = (isGameStart: boolean) => {
        setGameStatus((prev) => ({ ...prev, isGameStart }));
    };

    const setIsRoundStart = (isRoundStart: boolean) => {
        setGameStatus((prev) => ({ ...prev, isRoundStart }));
    };

    const setIsPlayerFinishRound = (isPlayerFinishRound: boolean) => {
        setGameStatus((prev) => ({ ...prev, isPlayerFinishRound }));
    };

    const setIsRoundFinished = (isRoundFinished: boolean) => {
        setGameStatus((prev) => ({ ...prev, isRoundFinished }));
    };

    const setIsGameOver = (isGameOver: boolean) => {
        setGameStatus((prev) => ({ ...prev, isGameOver }));
    }

    const setWaitingIsWaiting = (isWaiting: boolean) => {
        setWaitingRoom((prev) => ({ ...prev, isWaiting }));
    };

    const resetGameStatusContext = () => {
        setGameStatus((prev) => {
            return {
                ...prev,
                isGameStart: true,
                isRoundStart: false,
                isPlayerFinishRound: false,
                isRoundFinished: false,
                isGameOver: false,
            };
        });
    };

    const clearGameStatusContext = () => {
        setGameStatus((prev) => {
            return {
                ...prev,
                isGameStart: false,
                isRoundStart: false,
                isPlayerFinishRound: false,
                isRoundFinished: false,
                isGameOver: false,
            };
        });
        setWaitingRoom((prev) => {
            return {
                ...prev,
                isWaiting: true,
            };
        });
    };

    return (
        <GameStatusContext.Provider
            value={{
                gameStatus,
                waitingRoom,
                setWaitingRoom,
                activateTimer,
                setActivateTimer,
                isPreview,
                setIsPreview,
                setIsGameStart,
                setIsRoundStart,
                setIsPlayerFinishRound,
                setIsRoundFinished,
                setIsGameOver,
                setWaitingIsWaiting,
                resetGameStatusContext,
                clearGameStatusContext,
            }}
        >
            {children}
        </GameStatusContext.Provider>
    );
};
