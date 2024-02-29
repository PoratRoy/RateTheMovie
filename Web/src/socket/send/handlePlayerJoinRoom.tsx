import { Socket } from "socket.io-client";
import { Player } from "../../models/types/player";
import { WarRoomProps } from "../../models/types/warRoom";

const socketHandlePlayerJoinRoom = (
    socket: Socket<any, any>,
    setRivalPlayers: React.Dispatch<React.SetStateAction<Player[]>>,
) => {
    return (roomId: string, player: Player, callback: (currecntPlayer: Player) => void) => {
        socket.emit(
            "PlayerJoinRoom",
            roomId,
            player,
            async (warRoom: WarRoomProps, currecntPlayer: Player, rivalPlayers: Player[]) => {
                if (warRoom && currecntPlayer) {
                    setRivalPlayers((prev) => {
                        return [...prev, ...rivalPlayers];
                    });
                    callback(currecntPlayer);
                }
            },
        );
    };
};

export default socketHandlePlayerJoinRoom;
