import React, { useEffect, useMemo } from "react";
import PlayBtn from "../../actions/widgets/btn/PlayBtn";
import RoundsNumber from "../../actions/components/RoundsNumber";
import FilterCollapse from "../filter/FilterCollapse";
import PreviewProfile from "../profile/PreviewProfile";
import { setupInputs } from "../../../models/initialization/form";
import SetupLayout from "../../../pages/layout/SetupLayout";
import { SetupInputSchema } from "../../../models/types/inputSchema";
import useInitialForm from "../../../hooks/global/useInitialForm";
import { setupFormSchema } from "../../../models/validation/form";
import { initSetupDefaultValues } from "../../../models/initialization/input";
import { SetupProps } from "../../../models/types/props/landing";
import useMod from "../../../hooks/gameplay/useMod";
import FilterInputs from "../filter/FilterInputs";
import { START_BTN_ID } from "../../../models/constant/ids";

const Setup: React.FC<SetupProps> = ({ setupOption, playerRole = "player" }) => {
    const methods = useInitialForm<SetupInputSchema>(setupFormSchema, initSetupDefaultValues);
    const { setValue, watch } = methods;
    const { mod, player } = setupOption;
    const { isMulti, isNoneMode } = useMod();

    useEffect(() => {
        if (isNoneMode(mod) || !player) return;
        const { name, avatar } = player;
        setValue(setupInputs.name.id, name);
        setValue(setupInputs.avatar.id, avatar.toString());
    }, [setupOption]);

    const title = useMemo(() => {
        if (isMulti(mod)) {
            if (playerRole === "host") return "Create Room";
            return "Join Room";
        }
        return "Start";
    }, [mod]);

    return (
        <SetupLayout<SetupInputSchema>
            methods={methods}
            playerRole={playerRole}
            setupOption={setupOption}
        >
            <PreviewProfile
                player={player}
                avatarId={player?.avatar}
                setValue={setValue}
                watch={watch}
            />

            <PlayBtn id={START_BTN_ID} type="submit" title={title} />

            {playerRole === "host" ? (
                <React.Fragment>
                    <RoundsNumber setValue={setValue} id={setupInputs.rounds.id} />
                    <FilterCollapse>
                        <FilterInputs setValue={setValue} />
                    </FilterCollapse>
                </React.Fragment>
            ) : null}
        </SetupLayout>
    );
};

export default Setup;
