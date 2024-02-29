import { Player } from "../../models/types/player";

const handlePlayerJoined = (
    player: Player,
    setRivalPlayers: React.Dispatch<React.SetStateAction<Player[]>>,
) => {
    setRivalPlayers((prev) => {
        return [...prev, player];
    });
};

export default handlePlayerJoined;
