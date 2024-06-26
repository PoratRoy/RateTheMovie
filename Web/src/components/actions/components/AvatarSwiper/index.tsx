import { Avatars } from "../../../../models/resources/avatars";
import { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, HashNavigation, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import "swiper/css/mousewheel";
import "swiper/css/effect-coverflow";
import "./AvatarSwiper.css";
import { FieldValues } from "react-hook-form";
import { AvatarSwiperProps } from "../../../../models/types/props/input";
import { FormSetValue } from "../../../../models/constant";
import Avatar from "../../../profile/Avatar";
import { Avatar as AvatarType } from "../../../../models/types/player";

const AvatarSwiper = <TInput extends FieldValues>({
    id,
    setValue,
    defualt,
    setIsEdit,
}: AvatarSwiperProps<TInput>) => {
    const handleAvatar = (swiper: SwiperCore) => {
        setValue(id, JSON.stringify(swiper.realIndex), FormSetValue);
    };

    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            hashNavigation={{
                watchState: true,
            }}
            loop={true}
            mousewheel={true}
            navigation={true}
            modules={[EffectCoverflow, Mousewheel, HashNavigation, Navigation]}
            onSlideChange={handleAvatar}
            initialSlide={defualt}
            onClick={() => setIsEdit(false)}
        >
            {Avatars.map((avatar: AvatarType, i: number) => (
                <SwiperSlide key={i} data-hash={`avatar${i}`}>
                    <Avatar avatar={avatar} size="large" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default AvatarSwiper;
