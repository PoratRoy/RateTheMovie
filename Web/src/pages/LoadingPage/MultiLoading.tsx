import React from "react";
import style from "./LoadingPage.module.css";
import { MultiLoadingProps } from "../../models/types/props/landing";
import useRoomLink from "../../hooks/multiplayer/useRoomLink";
import { ModOption } from "../../models/enums/game";
import StartGameBtn from "../../components/actions/widgets/btn/StartGameBtn";
import CommonLayout from "../layout/CommonLayout";
import CopyRoomLinkBtn from "../../components/actions/widgets/btn/CopyRoomLinkBtn";
import WaitingRoom from "../../components/landing/WaitingRoom";
import { LOADING_START_BTN_ID } from "../../models/constant/ids";

const MultiLoading: React.FC<MultiLoadingProps> = ({
    isLoading,
    rivalPlayers,
    currentPlayer,
    game,
    onClicked,
}) => {
    const { roomLink } = useRoomLink(ModOption.MULTI, "host", game?.roomId);

    return (
        <CommonLayout>
            <section className={style.loadingPageBtnStatus}>
                <StartGameBtn
                    title="Start Game"
                    loading={isLoading}
                    onClicked={onClicked}
                    id={LOADING_START_BTN_ID}
                />
                <div className={style.loadingGameStatus}>
                    {currentPlayer?.role === "host"
                        ? "Waiting for other players..."
                        : "Waiting for the host to start the game..."}
                </div>
            </section>
            <CopyRoomLinkBtn roomLink={roomLink} playerName={currentPlayer?.name} />
            <WaitingRoom rivalPlayers={rivalPlayers} currentPlayer={currentPlayer} />
        </CommonLayout>
    );
};

export default MultiLoading;
