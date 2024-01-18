import React from "react";
import style from "./Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={style.gmaeFotter}>
            Made By{" "}
            <a className={style.gmaeFotterLink} href="https://github.com/PoratRoy" target="_blank">
                Roy Porat
            </a>
        </footer>
    );
};

export default Footer;
