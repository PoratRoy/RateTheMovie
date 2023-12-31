import React from "react";
import { useNavigate } from "react-router-dom";
import path from "../../router/routePath.json";
import { useGamePlayContext } from "../../context/GamePlayContext";
import style from "./Main.module.css";
import { useMovieContext } from "../../context/MovieContext";
import useInitialForm from "../../hooks/useInitialForm";
import { SelectInputSchema } from "../../models/types/inputSchema";
import { initSelectDefaultValues } from "../../models/initialization/input";
import { SubmitHandler } from "react-hook-form";
import { MovieFilters } from "../../models/types/movie";
import { DateDefaultJSON } from "../../models/constants";
import { filterInputs } from "../../models/initialization/form";
import DateRangeInput from "../../components/actions/input/DateRangeInput";
import GenreInput from "../../components/actions/input/GenreInput";
import CountryInput from "../../components/actions/input/CountryInput";
import GameFormLayout from "../../components/layout/MainLayout";
import SwitchPlayers from "../../components/actions/switch/SwitchPlayers";
import backgroundMoviesImg from "../../assets/moviePoster4.png";
import WaveSVG from "../../style/WaveSVG";

const Main: React.FC = () => {
    const navigate = useNavigate();
    const { setPlayers } = useGamePlayContext();
    const { setFilters } = useMovieContext();
    const methods = useInitialForm<SelectInputSchema>(initSelectDefaultValues);
    const { setValue } = methods;

    const onSubmitPlay: SubmitHandler<SelectInputSchema> = (data: SelectInputSchema) => {
        const { year, genre, country, players } = data;
        const movieFilters: MovieFilters = {
            year: year ? JSON.parse(year) : DateDefaultJSON,
            genre: genre ? JSON.parse(genre) : [],
            country: country ? JSON.parse(country) : "",
        };
        setFilters(movieFilters);
        setPlayers(players ? JSON.parse(players) : []);
        navigate(path.game);
    };

    return (
        <section className={style.mainBackground}>
            <section className={style.mainBackgroundImg}>
                <img src={backgroundMoviesImg} alt="Background image of movies" />
            </section>
            <WaveSVG/>
            <section className={style.mainContainer}>
                <GameFormLayout methods={methods} onSubmit={onSubmitPlay} isLoading={false}>
                    <SwitchPlayers id={filterInputs.players.id} setValue={setValue} />
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
                </GameFormLayout>
            </section>
        </section>
    );
};

export default Main;
