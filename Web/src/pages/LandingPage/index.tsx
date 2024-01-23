import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import path from "../../router/routePath.json";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { useMovieContext } from "../../context/MovieContext";
import useInitialForm from "../../hooks/useInitialForm";
import { SelectInputSchema } from "../../models/types/inputSchema";
import { initSelectDefaultValues } from "../../models/initialization/input";
import { SubmitHandler } from "react-hook-form";
import { MovieFilters } from "../../models/types/movie";
import LandingLayout from "../../components/layout/LandingLayout";
import PlayBtn from "../../components/actions/btn/PlayBtn";
import PlayerBtn from "../../components/actions/btn/PlayerBtn";
import FilterLayout from "../../components/layout/FilterLayout";
import GenreInput from "../../components/actions/input/GenreInput";
import CountryInput from "../../components/actions/input/CountryInput";
import DateRangeInput from "../../components/actions/input/DateRangeInput";
import { filterInputs } from "../../models/initialization/form";
import { PlayerColor } from "../../models/types/union";
import { initPlayer } from "../../models/initialization/player";
import {
    Colors,
    DateDefaultJSON,
    MULTIPLAYER_BTN_ID,
    PLAY_BTN_ID,
} from "../../models/constants";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const { setPlayers } = useGamePlayContext();
    const { setFilters } = useMovieContext();

    const [isFilterLayout, setIsFilterLayout] = useState<boolean>(false);

    const methods = useInitialForm<SelectInputSchema>(initSelectDefaultValues);
    const { setValue } = methods;

    const onSubmitPlay: SubmitHandler<SelectInputSchema> = (data: SelectInputSchema) => {
        const { year, genre, country } = data;
        const movieFilters: MovieFilters = {
            year: year ? JSON.parse(year) : DateDefaultJSON,
            genre: genre ? JSON.parse(genre) : [],
            country: country ? JSON.parse(country) : "",
        };
        setFilters(movieFilters);
        navigate(path.game);
    };

    const onHandlePlay = () => {
        setPlayers([initPlayer(0, Colors[0] as PlayerColor)]);
        setIsFilterLayout(true);
    };

    return (
        <LandingLayout isFilterLayout={isFilterLayout}>
            <FilterLayout methods={methods} onSubmit={onSubmitPlay} isLoading={false}>
                <GenreInput
                    id={filterInputs.genre.id}
                    placeholder={filterInputs.genre.placeholder}
                    label={filterInputs.genre.label}
                    setValue={setValue}
                />
                <CountryInput
                    id={filterInputs.country.id}
                    placeholder={filterInputs.country.placeholder}
                    label={filterInputs.country.label}
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
