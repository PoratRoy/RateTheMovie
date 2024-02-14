import { useGamePlayContext } from "../../../context/GamePlayContext";
import useInitialForm from "../../../hooks/useInitialForm";
import { SessionKey } from "../../../models/enums/session";
import { multiplayerInputs } from "../../../models/initialization/form";
import { MultiplayerInputSchema } from "../../../models/types/inputSchema";
import { MultiplayerProps } from "../../../models/types/props";
import { multiFormSchema } from "../../../models/validation/form";
import Session from "../../../utils/sessionStorage";
import RoomLink from "../../actions/RoomLink";
import NameInput from "../../actions/input/NameInput";
import MultiLayout from "../../layout/MultiLayout";

const Multiplayer: React.FC<MultiplayerProps> = ({ setLayoutOption }) => {
    const { players } = useGamePlayContext();
    const roomLink = Session.get(SessionKey.ROOM) || "";

    const methods = useInitialForm<MultiplayerInputSchema>(multiFormSchema, {
        name: players[players.length - 1].name || "", //TODO: fix this?
    });
    
    return (
        <MultiLayout<MultiplayerInputSchema> methods={methods} setLayoutOption={setLayoutOption}>
            <RoomLink room={roomLink} />
            <NameInput
                id={multiplayerInputs.name.id}
                placeholder={multiplayerInputs.name.placeholder}
                label={multiplayerInputs.name.label}
            />
        </MultiLayout>
    );
};

export default Multiplayer;
