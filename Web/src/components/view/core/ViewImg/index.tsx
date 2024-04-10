import React from "react";
import style from "./ViewImg.module.css";
import { ViewImgProps } from "../../../../models/types/props/view";
// import ReactPlayer from "react-player";
// import { MdOndemandVideo } from "react-icons/md";

const ViewImg: React.FC<ViewImgProps> = ({ src, alt }) => {
    // const [isVideo, setIsVideo] = useState<boolean>(false);

    // const handleVideo = () => {
    //     setIsVideo(true);
    // };

    // const handleVideoEnded = () => {
    //     setIsVideo(false);
    // };

    return (
        <section className={style.cardViewImgContainer}>
            <section>
                <img className={style.cardViewImg} src={src} alt={alt} />
            </section>
        </section>
    );

    // return (
    //     <section
    //         className={`${style.cardViewImgContainer} ${isVideo ? style.cardViewImgVideo : ""}`}
    //     >
    //         {isVideo ? (
    //             <section className={style.cardViewVideo}>
    //                 <ReactPlayer
    //                     onEnded={handleVideoEnded}
    //                     width={"100%"}
    //                     height={"100%"}
    //                     controls
    //                     url={video?.url}
    //                 />
    //             </section>
    //         ) : (
    //             <section>
    //                 <img className={style.cardViewImg} src={src} alt={alt} />
    //                 <div className={style.cardViewImgBtn} onClick={handleVideo}>
    //                     <MdOndemandVideo />
    //                 </div>
    //             </section>
    //         )}
    //     </section>
    // );
};

export default ViewImg;
