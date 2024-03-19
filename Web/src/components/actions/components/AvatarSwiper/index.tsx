import { AvatarImgs } from "../../../../models/resources/avatars";
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

const AvatarSwiper = <TInput extends FieldValues>({
    id,
    setValue,
    defualt,
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
            // TODO: defualt index not working
            initialSlide={defualt}
        >
            {AvatarImgs.map((img: string, i: number) => (
                <SwiperSlide key={i} data-hash={`avatar${i}`}>
                    <Avatar img={img} size="large" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default AvatarSwiper;
