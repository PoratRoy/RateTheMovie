import React, { useEffect, useState } from "react";
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
import useRoomLink from "../../../hooks/useRoomLink";
import { initSetupDefaultValues } from "../../../models/initialization/input";
import Session from "../../../utils/sessionStorage";
import { SessionKey } from "../../../models/enums/session";

const Setup: React.FC<SetupProps> = ({ setupOption, playerRole = "player" }) => {
    const methods = useInitialForm<SetupInputSchema>(setupFormSchema, initSetupDefaultValues);
    const { setValue } = methods;
    const { roomLink } = useRoomLink(setupOption, playerRole);

    const [avaterName, setaAvaterName] = useState<string>("");
    const [avaterId, setAvaterId] = useState<number>(0);

    useEffect(() => {
        if (setupOption === undefined) return;

        setTimeout(() => {
            const players = Session.get(SessionKey.PLAYERS);
            if (players?.length > 0) {
                const { name, avater } = players[0];
                setaAvaterName(name || "Player 1");
                setAvaterId(avater || 0);
                setValue(setupInputs.name.id, name || "Player 1");
                setValue(setupInputs.avater.id, avater.toString() || "0");
            }
        }, 50);
    }, [setupOption]);

    return (
        <SetupLayout<SetupInputSchema> methods={methods}>
            <PreviewProfile profileName={avaterName || "Player 1"} avaterId={avaterId}>
                <AvatersCarousel
                    setValue={setValue}
                    id={setupInputs.avater.id}
                    defualt={avaterId}
                />
                <NameInput id={setupInputs.name.id} placeholder={setupInputs.name.placeholder} />
            </PreviewProfile>

            {setupOption === SetupOption.MULTI ? <RoomLink roomLink={roomLink} /> : null}
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
