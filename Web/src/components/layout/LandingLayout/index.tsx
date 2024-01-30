import style from "./LandingLayout.module.css";
import backgroundMoviesImg from "../../../assets/allMoviesPoster2.jpeg";
//https://www.reduceimages.com/
import Logo from "../../common/Logo";
import Description from "../../common/Description";
import Footer from "../../common/Footer";
import { LandingLayoutProps } from "../../../models/types/props";
import useLandingAnimation from "../../../hooks/animation/useLandingAnimation";
import { DESCRIPTION_ID, LOGO_ID, MOVIES_POSTER_ID } from "../../../models/constants";
import WaveLayout from "../WaveLayout";

const LandingLayout: React.FC<LandingLayoutProps> = ({ children, isFilterLayout }) => {
    const { scope } = useLandingAnimation(isFilterLayout);

    return (
        <section ref={scope} className={style.landingBackground}>
            <section id={MOVIES_POSTER_ID} className={style.landingBackgroundImg}>
                <img src={backgroundMoviesImg} alt="Background poster of movies" />
            </section>
            <section id={MOVIES_POSTER_ID} className={style.landingBackgroundImg}>
                <img src={backgroundMoviesImg} alt="Background poster of movies" />
            </section>
            <WaveLayout>
                <section className={style.landingLogoContainer}>
                    <Logo id={LOGO_ID} />
                    <Description
                        id={DESCRIPTION_ID}
                        description="Be the best film critic the world has ever seen"
                    />
                </section>
                <section className={style.landingBtnContainer}>{children}</section>
                <Footer />
            </WaveLayout>
        </section>
    );
};

export default LandingLayout;
