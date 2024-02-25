import style from "./GuestLayout.module.css";
import Logo from "../../../components/common/widgets/Logo";
import Footer from "../../../components/common/Footer";
import { GuestLayoutProps } from "../../../models/types/props/layout";

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
    return (
        <section className={style.guestBackground}>
            <section className={style.guestLogoContainer}>
                <Logo />
            </section>
            <section className={style.guestBtnContainer}>{children}</section>
            <Footer />
        </section>
    );
};

export default GuestLayout;
