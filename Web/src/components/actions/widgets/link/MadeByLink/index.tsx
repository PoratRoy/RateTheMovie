import React from "react";
import style from "./MadeByLink.module.css";

const MadeByLink: React.FC = () => {
    return (
        <span className={style.FotterMadeBy}>
            Made By{" "}
            <a className={style.FotterMadeByLink} href="https://github.com/PoratRoy" target="_blank">
                Roy Porat
            </a>
        </span>
    );
};

export default MadeByLink;
