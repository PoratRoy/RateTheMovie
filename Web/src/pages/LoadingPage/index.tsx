import React from "react";
import style from "./LoadingPage.module.css";
import StartGameBtn from "../../components/actions/widgets/btn/StartGameBtn";
import { LoadingPageProps } from "../../models/types/props/landing";
import TextRotator from "../../components/info/TextRotator";
import useMod from "../../hooks/gameplay/useMod";
import CommonLayout from "../layout/CommonLayout";
import { ModOption } from "../../models/enums/landing";
import useRoomLink from "../../hooks/multiplayer/useRoomLink";
import WatingRoom from "../../components/profile/WatingRoom";
import CopyRoomLinkBtn from "../../components/actions/widgets/btn/CopyRoomLinkBtn";
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
        <CommonLayout>
            <TextRotator />

            <section className={style.loadingPageBtnStatus}>
                <StartGameBtn loading={isLoading} onClicked={onClicked} />
                {isMulti(game?.mod) ? (
                    <div className={style.loadingGameStatus}>
                        {playerRole === "host"
                            ? "Waiting for other players..."
                            : "Waiting for the host to start the game..."}
                    </div>
                ) : null}
            </section>
            {isMulti(game?.mod) ? <CopyRoomLinkBtn roomLink={roomLink} /> : null}
            {rivalPlayers && rivalPlayers.length > 0 ? (
                <WatingRoom rivalPlayers={rivalPlayers} />
            ) : null}
        </CommonLayout>
    );
};

export default LoadingPage;
