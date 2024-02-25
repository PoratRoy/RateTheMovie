import style from "./LandingLayout.module.css";
import Logo from "../../../components/common/widgets/Logo";
import Footer from "../../../components/common/Footer";
import useLandingAnimation from "../../../hooks/animation/useLandingAnimation";
import WaveLayout from "../WaveLayout";
import BackgroundPoster from "../../../components/common/BackgroundPoster";
import { SetupOption } from "../../../models/enums/landing";
import { LOGO_ID } from "../../../models/constant";
import { LandingLayoutProps } from "../../../models/types/props/layout";

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
