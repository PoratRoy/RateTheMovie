import React from "react";
import { CrewProps } from "../../../../models/types/props";
import Actor from "../Actor";
import style from "./Crew.module.css";

const Crew: React.FC<CrewProps> = ({ actors, director }) => {
    return (
        <section className={style.crewContainer}>
            {actors.length > 0 ? (
                <React.Fragment>
                    <div className={style.crewTitle}>Actors</div>
                    <div className={style.crewActorsContainer}>
                        {actors.map((actor, i) => (
                            <React.Fragment key={i}>
                                <Actor actor={actor} />
                            </React.Fragment>
                        ))}
                    </div>
                </React.Fragment>
            ) : null}

            {director ? (
                <React.Fragment>
                    <div className={style.crewTitle}>Director</div>
                    <div className={style.crewActorsContainer}>
                        <Actor actor={director} />
                    </div>
                </React.Fragment>
            ) : null}
        </section>
    );
};

export default Crew;
