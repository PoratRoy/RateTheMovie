import React from "react";
import style from "./SocialLinks.module.css";
import {
    WhatsappShareButton,
    FacebookMessengerShareButton,
    EmailShareButton,
    WhatsappIcon,
    FacebookMessengerIcon,
    EmailIcon,
} from "react-share";
import { SocialLinksProps } from "../../../../../models/types/props/link";

const SocialLinks: React.FC<SocialLinksProps> = ({ roomLink }) => {
    return (
        <div className={style.socialLinks}>
            <WhatsappShareButton url={roomLink} title="Your friend invites you to battle: ">
                <WhatsappIcon size={30} round />
            </WhatsappShareButton>

            <FacebookMessengerShareButton url={roomLink} appId="{Your_Facebook_App_Id}">
                <FacebookMessengerIcon size={30} round />
            </FacebookMessengerShareButton>

            <EmailShareButton
                url={roomLink}
                subject="Rate The Movie"
                body="Your friend invites you to battle: "
            >
                <EmailIcon size={30} round />
            </EmailShareButton>
        </div>
    );
};

export default SocialLinks;
