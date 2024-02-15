import style from "./GuestLayout.module.css";
import Logo from "../../common/Logo";
import Footer from "../../common/Footer";
import { GuestLayoutProps } from "../../../models/types/props";

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
