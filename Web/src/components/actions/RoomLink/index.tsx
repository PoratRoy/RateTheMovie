import React from 'react'
import style from "./RoomLink.module.css";
import { RoomLinkProps } from '../../../models/types/props';

const RoomLink: React.FC<RoomLinkProps> = ({ room }) => {
    
    return (
        <section className={style.roomLinkContianer}>
            <span className={style.roomLinkText}>{room}</span>
            <span className={style.roomL} ><button>C</button></span>
        </section>
    );
    //TODO: add copy to clipboard functionality
    //TODO: add button to copy to clipboard
    //TODO: add button to share to social media
}

export default RoomLink;
