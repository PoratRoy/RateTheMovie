import React from "react";
import CommonLayout from "../layout/CommonLayout";
import Pack from "../../components/cards/core/Pack";
import { Movie } from "../../models/types/movie";
import PreviewCard from "../../components/cards/single/PreviewCard";
import { useGamePlayContext } from "../../context/GamePlayContext";
import style from "./PreviewPage.module.css";
import Description from "../../components/common/Description";
import Title from "../../components/common/widgets/Title";
import { useGameStatusContext } from "../../context/GameStatusContext";

const PreviewPage: React.FC = () => {
    const { previewMovies } = useGamePlayContext();
    const { setIsPreview } = useGameStatusContext();

    const handleGoBack = () => {
        setIsPreview((prev) => !prev);
    };

    return (
        <CommonLayout hasFooter onGoBack={handleGoBack}>
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
        </CommonLayout>
    );
};

export default PreviewPage;
