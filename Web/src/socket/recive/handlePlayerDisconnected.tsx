import { Player } from "../../models/types/player";

const handlePlayerDisconnected = (
    player: Player,
    setRivalPlayers: React.Dispatch<React.SetStateAction<Player[]>>,
    handleAlert: (message: string) => void,
) => {
    setRivalPlayers((prev) => {
        return prev.filter((p) => p.id !== player.id);
    });
    const message = `${player.name} has left the game`;
    handleAlert(message);
};

export default handlePlayerDisconnected;
