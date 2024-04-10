import React, { useState } from "react";
import CommonLayout from "../layout/CommonLayout";
import Pack from "../../components/cards/core/Pack";
import { Movie } from "../../models/types/movie";
import PreviewCard from "../../components/cards/single/PreviewCard";
import { useGamePlayContext } from "../../context/GamePlayContext";
import style from "./PreviewPage.module.css";
import Description from "../../components/common/Description";
import Title from "../../components/common/widgets/Title";
import useShowModal from "../../hooks/global/useShowModal";
import MovieModal from "../../components/view/modals/MovieModal";

const PreviewPage: React.FC = () => {
    const [movieModal, setMovieModal] = useState<Movie | undefined>();
    const { previewMovies, setIsPreview } = useGamePlayContext();
    const { showModal, handleOpen, handleClose } = useShowModal();

    const handleGoBack = () => {
        setIsPreview((prev) => !prev);
    };

    const handleOpenModal = (movie: Movie) => {
        setMovieModal(movie);
        handleOpen();
    };

    return (
        <CommonLayout hasFooter onGoBack={handleGoBack}>
            <Title title="PRIVIEW MOVIES" />
            <div className={style.previewDescription}>
                <Description description={"Select movie to see more details"} />
            </div>

            {previewMovies ? (
                <section className={style.previewMovies}>
                    <Pack packDisplay="wrap">
                        {previewMovies.map((movie: Movie, i: number) => (
                            <React.Fragment key={i}>
                                <PreviewCard movie={movie} openModal={handleOpenModal} />
                                {showModal && movieModal ? (
                                    <MovieModal movie={movieModal} close={handleClose} />
                                ) : null}
                            </React.Fragment>
                        ))}
                    </Pack>
                </section>
            ) : null}
        </CommonLayout>
    );
};

export default PreviewPage;
