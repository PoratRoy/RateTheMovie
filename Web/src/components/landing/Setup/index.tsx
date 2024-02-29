import React, { useEffect } from "react";
import PlayBtn from "../../actions/widgets/btn/PlayBtn";
import RoundsNumber from "../../actions/RoundsNumber";
import FilterCollapse from "../filter/FilterCollapse";
import PreviewProfile from "../profile/PreviewProfile";
import NameInput from "../../actions/widgets/input/NameInput";
import { setupInputs } from "../../../models/initialization/form";
import SetupLayout from "../../../pages/layout/SetupLayout";
import { SetupInputSchema } from "../../../models/types/inputSchema";
import useInitialForm from "../../../hooks/global/useInitialForm";
import { setupFormSchema } from "../../../models/validation/form";
import AvatersCarousel from "../../actions/AvatersCarousel";
import RoomLink from "../../actions/widgets/link/RoomLink";
import { initSetupDefaultValues } from "../../../models/initialization/input";
import useRoomLink from "../../../hooks/multiplayer/useRoomLink";
import { START_BTN_ID } from "../../../models/constant";
import { SetupProps } from "../../../models/types/props/landing";
import useMod from "../../../hooks/gameplay/useMod";
import FilterInputs from "../filter/FilterInputs";

const Setup: React.FC<SetupProps> = ({ setupOption, playerRole = "player" }) => {
    const methods = useInitialForm<SetupInputSchema>(setupFormSchema, initSetupDefaultValues);
    const { setValue } = methods;
    const { mod, player, roomId } = setupOption;
    const { roomLink } = useRoomLink(mod, playerRole, roomId);
    const { isMulti, isNoneMode } = useMod();

    useEffect(() => {
        if (isNoneMode(mod) || !player) return;
        const { name, avater } = player;
        setValue(setupInputs.name.id, name);
        setValue(setupInputs.avater.id, avater.toString());
    }, [setupOption]);

    return (
        <SetupLayout<SetupInputSchema>
            methods={methods}
            playerRole={playerRole}
            setupOption={setupOption}
            roomLink={roomLink}
        >
            <PreviewProfile profileName={player?.name} avaterId={player?.avater}>
                <AvatersCarousel
                    setValue={setValue}
                    id={setupInputs.avater.id}
                    defualt={player?.avater || 0}
                />
                <NameInput id={setupInputs.name.id} placeholder={setupInputs.name.placeholder} />
            </PreviewProfile>

            {isMulti(mod) ? <RoomLink roomLink={roomLink} /> : null}
            <PlayBtn id={START_BTN_ID} type="submit" title="Start" />

            {playerRole === "host" ? (
                <React.Fragment>
                    <RoundsNumber setValue={setValue} id={setupInputs.rounds.id} />
                    {/* <Border /> */}
                    <FilterCollapse>
                        <FilterInputs setValue={setValue} />
                    </FilterCollapse>
                </React.Fragment>
            ) : null}
        </SetupLayout>
    );
};

export default Setup;
