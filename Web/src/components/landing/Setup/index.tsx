import React, { useEffect } from "react";
import { START_BTN_ID } from "../../../models/constants";
import PlayBtn from "../../actions/btn/PlayBtn";
import RoundsNumber from "../../actions/RoundsNumber";
import FilterCollapse from "../filter/FilterCollapse";
import { SetupProps } from "../../../models/types/props";
import PreviewProfile from "../profile/PreviewProfile";
import NameInput from "../../actions/input/NameInput";
import { setupInputs } from "../../../models/initialization/form";
import SetupLayout from "../../layout/SetupLayout";
import { SetupInputSchema } from "../../../models/types/inputSchema";
import useInitialForm from "../../../hooks/useInitialForm";
import { setupFormSchema } from "../../../models/validation/form";
import AvatersCarousel from "../../actions/AvatersCarousel";
import GenreInput from "../../actions/input/GenreInput";
import LanguageInput from "../../actions/input/LanguageInput";
import DateRangeInput from "../../actions/input/DateRangeInput";
import RoomLink from "../../actions/RoomLink";
import { SetupOption } from "../../../models/enums/landing";
import { initSetupDefaultValues } from "../../../models/initialization/input";

const Setup: React.FC<SetupProps> = ({ roomLink, setupOption, playerRole = "player" }) => {
    const methods = useInitialForm<SetupInputSchema>(setupFormSchema, initSetupDefaultValues);
    const { setValue } = methods;
    const { option, player } = setupOption;

    useEffect(() => {
        if (option === SetupOption.NONE || !player) return;
        const { name, avater } = player;
        setValue(setupInputs.name.id, name);
        setValue(setupInputs.avater.id, avater.toString());
    }, [setupOption]);

    return (
        <SetupLayout<SetupInputSchema> methods={methods} playerRole={playerRole}>
            <PreviewProfile profileName={player?.name || "Player"} avaterId={player?.avater || 0}>
                <AvatersCarousel
                    setValue={setValue}
                    id={setupInputs.avater.id}
                    defualt={player?.avater || 0}
                />
                <NameInput id={setupInputs.name.id} placeholder={setupInputs.name.placeholder} />
            </PreviewProfile>

            {option === SetupOption.MULTI ? <RoomLink roomLink={roomLink} /> : null}
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
