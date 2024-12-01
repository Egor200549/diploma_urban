import { useSwiper } from "swiper/react"
import { Button } from "../Button/Button"
import { TypeButtons } from "../Interfaces/TypeButtons"
import { useEffect, useState } from "react";

const SwiperButton = () => {

    const swiper = useSwiper();
    const [isLastPage, setIsLastPage] = useState<boolean>(false);

    const onload = () => {
        const handleSlideChange = () => {
            setIsLastPage(swiper.isEnd);
        }

        swiper.on('slideChange', handleSlideChange);

        return () => {
            swiper.off('slideChange', handleSlideChange);
        }
    }

    useEffect(() => onload(), [swiper]);

    const hanldeClick = () => {
        swiper.slideNext();
    }

    if (isLastPage) return null;

    return (
        <Button type={TypeButtons.BUTTON_STROKE} onClick={hanldeClick} >Следующий шаг</Button>
    )
}

export default SwiperButton;