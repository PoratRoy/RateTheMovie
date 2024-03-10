import React from "react";
import style from "./LoadingPage.module.css";
import StartGameBtn from "../../components/actions/widgets/btn/StartGameBtn";
import { LoadingPageProps } from "../../models/types/props/landing";
import TextRotator from "../../components/common/widgets/TextRotator";
import useMod from "../../hooks/gameplay/useMod";
import PreviewLayout from "../layout/PreviewLayout";
import RoomLink from "../../components/actions/widgets/link/RoomLink";
import { ModOption } from "../../models/enums/landing";
import useRoomLink from "../../hooks/multiplayer/useRoomLink";
import WatingRoom from "../../components/profile/WatingRoom";
//https://unused-css.com/blog/animated-down-arrow/
const LoadingPage: React.FC<LoadingPageProps> = ({
    isLoading,
    rivalPlayers,
    playerRole,
    game,
    onClicked,
}) => {
    const { isMulti } = useMod();
    const { roomLink } = useRoomLink(ModOption.MULTI, "host", game?.roomId);

    return (
        <PreviewLayout>
            {/* TODO: animate to the center */}

            <section className={style.loadingPageBtnStatus}>
                <StartGameBtn loading={isLoading} onClicked={onClicked} />
                {isMulti(game?.mod) ? (
                    <div className={style.loadingGameStatus}>
                        {playerRole === "host"
                            ? "Wait for the players to join"
                            : "Wait for the host to start the game"}
                    </div>
                ) : null}
            </section>

            <TextRotator />

            {isMulti() ? <RoomLink roomLink={roomLink} /> : null}

            {rivalPlayers.length > 0 ? <WatingRoom rivalPlayers={rivalPlayers} /> : null}
        </PreviewLayout>
    );
};

export default LoadingPage;
