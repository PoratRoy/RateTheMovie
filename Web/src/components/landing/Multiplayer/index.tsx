import useInitialForm from "../../../hooks/useInitialForm";
import { multiplayerInputs } from "../../../models/initialization/form";
import { initMultiDefaultValues } from "../../../models/initialization/input";
import { MultiplayerInputSchema } from "../../../models/types/inputSchema";
import FormTextInput from "../../actions/input/FormTextInput";
import MultiLayout from "../../layout/MultiLayout";

const Multiplayer: React.FC = () => {
    const methods = useInitialForm<MultiplayerInputSchema>(initMultiDefaultValues);

    return (
        <MultiLayout<MultiplayerInputSchema> methods={methods}>
            <FormTextInput
                id={multiplayerInputs.name.id}
                placeholder={multiplayerInputs.name.placeholder}
            />
        </MultiLayout>
    );
};

export default Multiplayer;
