import React from "react";
import CrewImg from "../CrewImg";
import style from "./Actor.module.css";
import { ActorProps } from "../../../../models/types/props/layout";

const Actor: React.FC<ActorProps> = ({ actor }) => {
    const { name, img } = actor;
    return (
        <div className={style.actorContainer}>
            <CrewImg alt={name} src={img} />
            <div className={style.actorName}>{name}</div>
        </div>
    );
};

export default Actor;
