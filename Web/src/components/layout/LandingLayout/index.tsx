import style from "./LandingLayout.module.css";
import Logo from "../../common/Logo";
import Footer from "../../common/Footer";
import { LandingLayoutProps } from "../../../models/types/props";
import useLandingAnimation from "../../../hooks/animation/useLandingAnimation";
import { LOGO_ID } from "../../../models/constants";
import WaveLayout from "../WaveLayout";
import BackgroundPoster from "../../common/BackgroundPoster";
import { SetupOption } from "../../../models/enums/landing";

const LandingLayout: React.FC<LandingLayoutProps> = ({ children, setupOption, setSetupOption }) => {
    const { scope } = useLandingAnimation(setupOption);
    const { option } = setupOption;

    return (
        <section ref={scope} className={style.landingBackground}>
            <BackgroundPoster />
            <WaveLayout>
                <section className={style.landingBtnContainer}>
                    <Logo id={LOGO_ID} />
                    {children}
                </section>
                <Footer
                    callback={
                        option === SetupOption.NONE
                            ? undefined
                            : () => {
                                  setSetupOption({ option: SetupOption.NONE });
                              }
                    }
                />
            </WaveLayout>
        </section>
    );
};

export default LandingLayout;
