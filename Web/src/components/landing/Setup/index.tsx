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
import GenreInput from "../../actions/widgets/input/GenreInput";
import LanguageInput from "../../actions/widgets/input/LanguageInput";
import DateRangeInput from "../../actions/widgets/input/DateRangeInput";
import RoomLink from "../../actions/widgets/link/RoomLink";
import { ModOption } from "../../../models/enums/landing";
import { initSetupDefaultValues } from "../../../models/initialization/input";
import useRoomLink from "../../../hooks/multiplayer/useRoomLink";
import { START_BTN_ID } from "../../../models/constant";
import { SetupProps } from "../../../models/types/props/landing";

const Setup: React.FC<SetupProps> = ({ setupOption, playerRole = "player" }) => {
    const methods = useInitialForm<SetupInputSchema>(setupFormSchema, initSetupDefaultValues);
    const { setValue } = methods;
    const { mod, player, roomId } = setupOption;
    const { roomLink } = useRoomLink(mod, playerRole, roomId);

    useEffect(() => {
        if (mod === ModOption.NONE || !player) return;
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
            <PreviewProfile profileName={player?.name} avaterId={player?.avater || -1}>
                <AvatersCarousel
                    setValue={setValue}
                    id={setupInputs.avater.id}
                    defualt={player?.avater || 0}
                />
                <NameInput id={setupInputs.name.id} placeholder={setupInputs.name.placeholder} />
            </PreviewProfile>

            {mod === ModOption.MULTI ? <RoomLink roomLink={roomLink} /> : null}
            <PlayBtn id={START_BTN_ID} type="submit" title="Start" />

            {playerRole === "host" ? (
                <React.Fragment>
                    <RoundsNumber setValue={setValue} id={setupInputs.rounds.id} />
                    {/* <Border /> */}
                    <FilterCollapse>
                        <GenreInput
                            id={setupInputs.genre.id}
                            placeholder={setupInputs.genre.placeholder}
                            label={setupInputs.genre.label}
                            setValue={setValue}
                        />
                        <LanguageInput
                            id={setupInputs.language.id}
                            placeholder={setupInputs.language.placeholder}
                            label={setupInputs.language.label}
                            setValue={setValue}
                        />
                        <DateRangeInput
                            id={setupInputs.year.id}
                            label={setupInputs.year.label}
                            setValue={setValue}
                        />
                    </FilterCollapse>
                </React.Fragment>
            ) : null}
        </SetupLayout>
    );
};

export default Setup;
