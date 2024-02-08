import useInitialForm from "../../../hooks/useInitialForm";
import { multiplayerInputs } from "../../../models/initialization/form";
import { initMultiDefaultValues } from "../../../models/initialization/input";
import { MultiplayerInputSchema } from "../../../models/types/inputSchema";
import { MultiplayerProps } from "../../../models/types/props";
import { multiFormSchema } from "../../../models/validation/form";
import RoomLink from "../../actions/RoomLink";
import NameInput from "../../actions/input/NameInput";
import MultiLayout from "../../layout/MultiLayout";

const Multiplayer: React.FC<MultiplayerProps> = ({ setLayoutOption }) => {
    const methods = useInitialForm<MultiplayerInputSchema>(multiFormSchema, initMultiDefaultValues);

    return (
        <MultiLayout<MultiplayerInputSchema> methods={methods} setLayoutOption={setLayoutOption}>
            <RoomLink room="http://localhost:5173/game/" />
            <NameInput
                id={multiplayerInputs.name.id}
                placeholder={multiplayerInputs.name.placeholder}
                label={multiplayerInputs.name.label}
            />
        </MultiLayout>
    );
};

export default Multiplayer;
