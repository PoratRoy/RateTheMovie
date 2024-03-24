import React from "react";
import style from "./Footer.module.css";
import BackLink from "../../actions/widgets/link/BackLink";
import MadeByLink from "../../actions/widgets/link/MadeByLink";
import { FooterProps } from "../../../models/types/props/common";

const Footer: React.FC<FooterProps> = ({ link, callback, toClear, isFixed = false }) => {
    return (
        <footer className={style.gameFotter} style={{ position: isFixed ? "fixed" : "relative" }}>
            <MadeByLink />
            {link || callback ? (
                <BackLink link={link} callback={callback} toClear={toClear} />
            ) : null}
        </footer>
    );
};

export default Footer;
