import React from "react";
import { START_BTN_ID } from "../../../models/constants";
import PlayBtn from "../../actions/btn/PlayBtn";
import RoundsNumber from "../../actions/RoundsNumber";
import Border from "../../common/Border";
import FilterCollapse from "../filte/FilterCollapse";
import { SetupProps } from "../../../models/types/props";
import PreviewProfile from "../profile/PreviewProfile";
import NameInput from "../../actions/input/NameInput";
import { setupInputs } from "../../../models/initialization/form";
import SetupLayout from "../../layout/SetupLayout";
import { SetupInputSchema } from "../../../models/types/inputSchema";
import useInitialForm from "../../../hooks/useInitialForm";
import { setupFormSchema } from "../../../models/validation/form";
import Avaters from "../../actions/Avaters";
import GenreInput from "../../actions/input/GenreInput";
import LanguageInput from "../../actions/input/LanguageInput";
import DateRangeInput from "../../actions/input/DateRangeInput";
import RoomLink from "../../actions/RoomLink";
import { SetupOption } from "../../../models/enums/landing";
import useRoomLink from "../../../hooks/useRoomLink";
import { initSetupDefaultValues } from "../../../models/initialization/input";

const Setup: React.FC<SetupProps> = ({ setupOption, playerRole = "player" }) => {
    const methods = useInitialForm<SetupInputSchema>(setupFormSchema, initSetupDefaultValues); //default values
    const { setValue } = methods;
    const { roomLink } = useRoomLink(setupOption, playerRole);
    const { name, avater } = initSetupDefaultValues;
    const avaterId = parseInt(avater || "0");

    return (
        <SetupLayout<SetupInputSchema> methods={methods}>
            <PreviewProfile profileName={name || "Player 1"} avaterId={avaterId}>
                <Avaters setValue={setValue} id={setupInputs.avater.id} defualt={avaterId} />
                <NameInput id={setupInputs.name.id} placeholder={setupInputs.name.placeholder} />
            </PreviewProfile>
            {setupOption === SetupOption.MULTI ? <RoomLink roomLink={roomLink} /> : null}
            <PlayBtn id={START_BTN_ID} type="submit" title="Start" />
            <RoundsNumber setValue={setValue} id={setupInputs.rounds.id} />
            <Border />
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
        </SetupLayout>
    );
};

export default Setup;
