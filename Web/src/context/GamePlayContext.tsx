import { createContext, useContext, useState } from "react";
import { Card } from "../models/types/card";
import { Player, SelectedOrder } from "../models/types/player";
import { SessionKey } from "../models/enums/session";
import Session from "../utils/sessionStorage";

export const GamePlayContext = createContext<{
    correctOrder: Card[];
    setCorrectOrder: React.Dispatch<React.SetStateAction<Card[]>>;
    players: Player[];
    setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
    finish: boolean;
    setFinish: React.Dispatch<React.SetStateAction<boolean>>;
    clearGameContext: () => void;
    selectedOrder: SelectedOrder[];
    setCardsOrder: (index: number, card: Card | undefined) => void;
}>({
    correctOrder: [],
    setCorrectOrder: () => {},
    players: [],
    setPlayers: () => {},
    finish: false,
    setFinish: () => {},
    clearGameContext: () => {},
    selectedOrder: [],
    setCardsOrder: () => {},
});

export const useGamePlayContext = () => useContext(GamePlayContext);

export const GamePlayContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [correctOrder, setCorrectOrder] = useState<Card[]>([]);
    const [players, setPlayers] = useState<Player[]>([]);
    const [finish, setFinish] = useState<boolean>(false);
    const [selectedOrder, setSelectedOrder] = useState<SelectedOrder[]>([]);

    const setStateFromSession = () => {
        if (!players || players.length === 0) {
            const sessionPlayers = Session.get(SessionKey.PLAYERS);
            const sessionCorrectOrder = Session.get(SessionKey.CORRECT_ORDER);
            if (sessionPlayers && sessionPlayers.length > 0) {
                setPlayers(sessionPlayers);
            }
            if (sessionCorrectOrder && sessionCorrectOrder.length > 0) {
                setCorrectOrder(sessionCorrectOrder);
            }
        }
    };
    setStateFromSession();

    const setCardsOrder = (index: number, card: Card | undefined) => {
        setSelectedOrder((prev) => {
            const newOrder = [...prev];
            newOrder[index] = { card } as SelectedOrder;
            return newOrder;
        });
    };

    const clearGameContext = () => {
        Session.remove(SessionKey.PLAYERS);
        Session.remove(SessionKey.CORRECT_ORDER);
        setCorrectOrder([]);
        setPlayers([]);
        setFinish(false);
    };

    return (
        <GamePlayContext.Provider
            value={{
                correctOrder,
                setCorrectOrder,
                players,
                setPlayers,
                finish,
                setFinish,
                clearGameContext,
                selectedOrder,
                setCardsOrder,
            }}
        >
            {children}
        </GamePlayContext.Provider>
    );
};
