import React from "react";
import Actor from "../Actor";
import style from "./Crew.module.css";
import { CrewProps } from "../../../../models/types/props/layout";

const Crew: React.FC<CrewProps> = ({ actors, director }) => {
    return (
        <section className={style.crewContainer}>
            {actors.length > 0 ? (
                <section>
                    <div className={style.crewTitle}>Actors</div>
                    <div className={style.crewActorsContainer}>
                        {actors.map((actor, i) => (
                            <React.Fragment key={i}>
                                <Actor actor={actor} />
                            </React.Fragment>
                        ))}
                    </div>
                </section>
            ) : null}

            {director ? (
                <section>
                    <div className={style.crewTitle}>Director</div>
                    <div className={style.crewActorsContainer}>
                        <Actor actor={director} />
                    </div>
                </section>
            ) : null}
        </section>
    );
};

export default Crew;
