import React, { useEffect, useState } from "react";
import style from "./Avatar.module.css";
import { AvatarProps } from "../../../models/types/props/profile";
import { styleSize } from "../../../style/style";
import { Blurhash } from "react-blurhash";

const Avatar: React.FC<AvatarProps> = ({ avatar, size = "small" }) => {
    const className = styleSize(style)[size];
    const [imageLoading, setImageLoading] = useState<boolean>(true);

    useEffect(() => {
        if (avatar) {
            const image = new Image();
            image.onload = () => {
                setImageLoading(false);
            };
            image.src = avatar.img || "";
            return () => {
                image.onload = null;
            };
        }
    }, [avatar]);

    return (
        <div className={className}>
            {avatar?.img ? (
                <React.Fragment>
                    <div style={{ display: imageLoading ? "inline" : "none" }}>
                        <Blurhash
                            hash={avatar?.hash}
                            width={"100px"}
                            height={"100px"}
                            resolutionX={32}
                            resolutionY={32}
                            punch={1}
                        />
                    </div>
                    <div style={{ display: !imageLoading ? "inline" : "none" }}>
                        <img src={avatar?.img} alt="avatar" />
                    </div>
                </React.Fragment>
            ) : null}
        </div>
    );
};

export default Avatar;
