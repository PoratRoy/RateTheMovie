import React, { useEffect } from "react";
import PlayBtn from "../../actions/widgets/btn/PlayBtn";
import RoundsNumber from "../../actions/components/RoundsNumber";
import FilterCollapse from "../filter/FilterCollapse";
import PreviewProfile from "../profile/PreviewProfile";
import { setupInputs } from "../../../models/initialization/form";
import SetupLayout from "../../../pages/layout/SetupLayout";
import { SetupInputSchema } from "../../../models/types/inputSchema";
import useInitialForm from "../../../hooks/global/useInitialForm";
import { setupFormSchema } from "../../../models/validation/form";
import RoomLink from "../../actions/widgets/link/RoomLink";
import { initSetupDefaultValues } from "../../../models/initialization/input";
import useRoomLink from "../../../hooks/multiplayer/useRoomLink";
import { SetupProps } from "../../../models/types/props/landing";
import useMod from "../../../hooks/gameplay/useMod";
import FilterInputs from "../filter/FilterInputs";
import { START_BTN_ID } from "../../../models/constant/ids";

const Setup: React.FC<SetupProps> = ({ setupOption, playerRole = "player" }) => {
    const methods = useInitialForm<SetupInputSchema>(setupFormSchema, initSetupDefaultValues);
    const { setValue, watch } = methods;
    const { mod, player, roomId } = setupOption;
    const { roomLink } = useRoomLink(mod, playerRole, roomId);
    const { isMulti, isNoneMode } = useMod();

    useEffect(() => {
        if (isNoneMode(mod) || !player) return;
        const { name, avatar } = player;
        setValue(setupInputs.name.id, name);
        setValue(setupInputs.avatar.id, avatar.toString());
    }, [setupOption]);

    return (
        <SetupLayout<SetupInputSchema>
            methods={methods}
            playerRole={playerRole}
            setupOption={setupOption}
            roomLink={roomLink}
        >
            <PreviewProfile player={player} avatarId={player?.avatar} setValue={setValue} watch={watch} />

            {isMulti(mod) ? <RoomLink roomLink={roomLink} isDefaultOpen /> : null}
            <PlayBtn id={START_BTN_ID} type="submit" title="Start" />

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
