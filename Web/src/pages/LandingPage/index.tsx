import React, { useState } from "react";
import { useGamePlayContext } from "../../context/GamePlayContext";
import useInitialForm from "../../hooks/useInitialForm";
import { SelectInputSchema } from "../../models/types/inputSchema";
import { initSelectDefaultValues } from "../../models/initialization/input";
import LandingLayout from "../../components/layout/LandingLayout";
import PlayBtn from "../../components/actions/btn/PlayBtn";
import PlayerBtn from "../../components/actions/btn/PlayerBtn";
import FilterLayout from "../../components/layout/FilterLayout";
import GenreInput from "../../components/actions/input/GenreInput";
import LanguageInput from "../../components/actions/input/LanguageInput";
import DateRangeInput from "../../components/actions/input/DateRangeInput";
import { filterInputs } from "../../models/initialization/form";
import { PlayerColor } from "../../models/types/union";
import { initPlayer } from "../../models/initialization/player";
import { Colors, MULTIPLAYER_BTN_ID, PLAY_BTN_ID } from "../../models/constants";
import Session from "../../utils/sessionStorage";
import { SessionKey } from "../../models/enums/session";

const LandingPage: React.FC = () => {
    const { setPlayers } = useGamePlayContext();

    const [isFilterLayout, setIsFilterLayout] = useState<boolean>(false);

    const methods = useInitialForm<SelectInputSchema>(initSelectDefaultValues);
    const { setValue } = methods;

    const onHandlePlay = () => {
        const players = [initPlayer(0, Colors[0] as PlayerColor)];
        Session.set(SessionKey.PLAYERS, players);
        setPlayers(players);
        setIsFilterLayout(true);
    };

    return (
        <LandingLayout isFilterLayout={isFilterLayout}>
            <FilterLayout<SelectInputSchema> methods={methods}>
                <GenreInput
                    id={filterInputs.genre.id}
                    placeholder={filterInputs.genre.placeholder}
                    label={filterInputs.genre.label}
                    setValue={setValue}
                />
                <LanguageInput
                    id={filterInputs.language.id}
                    placeholder={filterInputs.language.placeholder}
                    label={filterInputs.language.label}
                    setValue={setValue}
                />
                <DateRangeInput
                    id={filterInputs.year.id}
                    label={filterInputs.year.label}
                    setValue={setValue}
                />
            </FilterLayout>
            <PlayBtn id={PLAY_BTN_ID} title="Play" onClicked={onHandlePlay} />
            <PlayerBtn
                id={MULTIPLAYER_BTN_ID}
                title="Multiplayer"
                onClicked={() => {}}
                onFocused={false}
            />
        </LandingLayout>
    );
};

export default LandingPage;
