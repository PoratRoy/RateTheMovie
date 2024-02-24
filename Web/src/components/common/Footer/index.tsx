import React from "react";
import style from "./Footer.module.css";
import { FooterProps } from "../../../models/types/props";
import BackLink from "../../actions/link/BackLink";
import MadeByLink from "../../actions/link/MadeByLink";

const Footer: React.FC<FooterProps> = ({ link, callback }) => {
    return (
        <footer className={style.gameFotter}>
            <MadeByLink />
            {link || callback ? <BackLink link={link} callback={callback} /> : null}
        </footer>
    );
};

export default Footer;
