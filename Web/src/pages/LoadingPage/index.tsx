import React from "react";
import style from "./LoadingPage.module.css";
import Logo from "../../components/common/widgets/Logo";
import StartGameBtn from "../../components/actions/widgets/btn/StartGameBtn";
import { LoadingPageProps } from "../../models/types/props/landing";
import RivalPlayerProfile from "../../components/profile/RivalPlayerProfile";
import { Player } from "../../models/types/player";
import TextRotator from "../../components/common/widgets/TextRotator";
import { ModOption } from "../../models/enums/landing";

const LoadingPage: React.FC<LoadingPageProps> = ({
    isLoading,
    rivalPlayers,
    playerRole,
    gameMod,
    onClicked,
}) => {
    return (
        <section className={style.loadingPage}>
            <div className={style.loadingPageLogo}>
                <Logo size="small" />
            </div>
            {/* TODO: animate to the center */}
            <section className={style.loadingPageBtnStatus}>
                <StartGameBtn loading={isLoading} onClicked={onClicked} />
                {gameMod === ModOption.MULTI && isLoading ? (
                    <div className={style.loadingGameStatus}>
                        {playerRole === "host"
                            ? "Wait for the players to join"
                            : "Wait for the host to start the game"}
                    </div>
                ) : null}
            </section>

            {/* TODO: add the room link here */}

            <TextRotator />

            {rivalPlayers.length > 0 ? (
                <section className={style.loadingPageRivals}>
                    <div>In the room</div>
                    <section className={style.loadingPageRivalsRivals}>
                        {rivalPlayers.map((player: Player, i: number) => {
                            return <RivalPlayerProfile key={i} player={player} />;
                        })}
                    </section>
                </section>
            ) : null}
        </section>
    );
};

export default LoadingPage;
