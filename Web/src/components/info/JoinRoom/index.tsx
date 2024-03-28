import React from "react";
import style from "./JoinRoom.module.css";
import Loading from "../../actions/animation/Loading";

const JoinRoom: React.FC = () => {
    return (
        <section className={style.joinRoomContainer}>
            <h1>Join Room...</h1>
            <Loading />
        </section>
    );
};

export default JoinRoom;
