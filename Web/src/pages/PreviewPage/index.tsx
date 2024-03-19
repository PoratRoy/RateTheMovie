import React from "react";
import PreviewLayout from "../layout/PreviewLayout";
import Pack from "../../components/cards/core/Pack";
import { Movie } from "../../models/types/movie";
import PreviewCard from "../../components/cards/single/PreviewCard";
import { useGamePlayContext } from "../../context/GamePlayContext";
import style from "./PreviewPage.module.css";
import Description from "../../components/common/Description";
import Title from "../../components/common/widgets/Title";

const PreviewPage: React.FC = () => {
    const { previewMovies } = useGamePlayContext();

    return (
        <PreviewLayout hasFooter>
            <Title title="PRIVIEW MOVIES" />
            <div className={style.previewDescription}>
                <Description description={"Double click on the movie to see more details"} />
            </div>

            <section className={style.previewMovies}>
                <Pack packDisplay="wrap">
                    {previewMovies.map((movie: Movie, i: number) => (
                        <React.Fragment key={i}>
                            <PreviewCard movie={movie} />
                        </React.Fragment>
                    ))}
                </Pack>
            </section>
        </PreviewLayout>
    );
};

export default PreviewPage;
