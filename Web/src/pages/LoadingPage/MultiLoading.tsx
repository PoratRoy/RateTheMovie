import React from "react";
import style from "./LoadingPage.module.css";
import { MultiLoadingProps } from "../../models/types/props/landing";
import useRoomLink from "../../hooks/multiplayer/useRoomLink";
import { ModOption } from "../../models/enums/landing";
import StartGameBtn from "../../components/actions/widgets/btn/StartGameBtn";
import CommonLayout from "../layout/CommonLayout";
import CopyRoomLinkBtn from "../../components/actions/widgets/btn/CopyRoomLinkBtn";
import WatingRoom from "../../components/profile/WatingRoom";

const MultiLoading: React.FC<MultiLoadingProps> = ({
    isLoading,
    rivalPlayers,
    playerRole,
    game,
    onClicked,
}) => {
    const { roomLink } = useRoomLink(ModOption.MULTI, "host", game?.roomId);

    return (
        <CommonLayout>
            <section className={style.loadingPageBtnStatus}>
                <StartGameBtn loading={isLoading} onClicked={onClicked} />
                <div className={style.loadingGameStatus}>
                    {playerRole === "host"
                        ? "Waiting for other players..."
                        : "Waiting for the host to start the game..."}
                </div>
            </section>
            <CopyRoomLinkBtn roomLink={roomLink} />
            {rivalPlayers && rivalPlayers.length > 0 ? (
                <WatingRoom rivalPlayers={rivalPlayers} />
            ) : null}
        </CommonLayout>
    );
};

export default MultiLoading;
