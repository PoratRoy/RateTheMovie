import React from "react";
import style from "./Footer.module.css";
import { FooterProps } from "../../../models/types/props";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC<FooterProps> = ({ link }) => {
    return (
        <footer className={style.gmaeFotter}>
            <span className={style.gameFotterBy}>
                Made By{" "}
                <a
                    className={style.gmaeFotterLink}
                    href="https://github.com/PoratRoy"
                    target="_blank"
                >
                    Roy Porat
                </a>
            </span>
            {link && (
                <Link className={style.gameFotterBack} to={link}>
                    <FaArrowLeft /> Back
                </Link>
            )}
        </footer>
    );
};

export default Footer;
