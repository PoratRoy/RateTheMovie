import React from "react";
import style from "./Footer.module.css";
import { FooterProps } from "../../../models/types/props";
import BackLink from "../../actions/link/BackLink";
import MadeByLink from "../../actions/link/MadeByLink";

const Footer: React.FC<FooterProps> = ({ link }) => {
    return (
        <footer className={style.gameFotter}>
            <MadeByLink />
            {link && <BackLink link={link} />}
        </footer>
    );
};

export default Footer;
