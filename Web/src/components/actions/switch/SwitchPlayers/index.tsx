import { useEffect, useState } from "react";
import PlayerBtn from "../../btn/PlayerBtn";
import style from "./SwitchPlayers.module.css";
import { FieldValues } from "react-hook-form";
import { SwitchPlayersProps } from "../../../../models/types/props";
import { FormSetValue, Players } from "../../../../models/constants";
import { switchPlayers } from "../../../../utils/filter";

const SwitchPlayers = <TInput extends FieldValues>({
    id,
    setValue,
}: SwitchPlayersProps<TInput>) => {
    const [selected, setSelected] = useState<number>(0);

    useEffect(() => {
        if (selected === 0) {
            const players = switchPlayers(0);
            setValue(id, JSON.stringify(players), FormSetValue);
        }
    }, []);

    const handleOnClick = (playerId: number) => {
        setSelected(playerId);
        const players = switchPlayers(playerId);
        setValue(id, JSON.stringify(players), FormSetValue);
    };

    return (
        <div className={style.switchPlayerContainer}>
            {Players.map((player: string, i: number) => (
                <PlayerBtn
                    key={i}
                    title={player}
                    onClicked={() => handleOnClick(i)}
                    onFocused={selected === i ? true : false}
                />
            ))}
        </div>
    );
};

export default SwitchPlayers;
