import React, { useEffect, useState } from "react";
import style from "./Avatar.module.css";
import { AvatarProps } from "../../../models/types/props/profile";
import { styleSize } from "../../../style/style";
import { Blurhash } from "react-blurhash";

const Avatar: React.FC<AvatarProps> = ({ avatar, size = "small" }) => {
    const className = styleSize(style)[size];
    const [imageLoading, setImageLoading] = useState<boolean>(false);

    useEffect(() => {
        if (avatar) {
            const image = new Image();
            image.onload = () => {
                setImageLoading(true);
            };
            image.src = avatar.img || "";
            return () => {
                image.onload = null;
            };
        }
    }, []);
    //TODO: add animation

    return (
        <div className={className}>
            {avatar?.img ? (
                <React.Fragment>
                    <div style={{ display: imageLoading ? "none" : "inline" }}>
                        <Blurhash
                            hash={avatar?.hash}
                            width={"100%"}
                            height={"100%"}
                            resolutionX={32}
                            resolutionY={32}
                            punch={1}
                        />
                    </div>
                    <div style={{ display: !imageLoading ? "none" : "inline" }}>
                        <img src={avatar?.img} alt="avatar" />
                    </div>
                </React.Fragment>
            ) : null}
        </div>
    );
};

export default Avatar;
