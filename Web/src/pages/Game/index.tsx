import React, { useState } from "react";
import style from "./Game.module.css";
import useDiscoverMovies from "../../api/hooks/useDiscoverMovies";
import PackOfCards from "../../components/cards/pack/PackOfCards";
import SelectedCards from "../../components/cards/pack/SelectedCards";
import { DndContext } from "@dnd-kit/core";
import { TargetMovieCard } from "../../models/types/movie";
import { initTargetMovieCard } from "../../models/initialization/movie";

const Game: React.FC = () => {
    useDiscoverMovies();

    const [terget, setTerget] = useState<TargetMovieCard>(initTargetMovieCard);

    function handleDragEnd(event: any) {
        const { over, active } = event;
        const movie = active?.data?.current?.movie;
        setTerget({ id: over?.id, movie });
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <SelectedCards terget={terget} />
            <PackOfCards />
        </DndContext>
    );
};

export default Game;
