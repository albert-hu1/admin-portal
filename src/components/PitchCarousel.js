import Slider from "react-slick";
import { Box } from "@mui/material";
import { Pitch1 } from "../pages/PitchsDetails/Pitch1";
import Pitch2 from "../pages/PitchsDetails/Pitch2";
import Pitch3 from "../pages/PitchsDetails/Pitch3";
import { useRef, useState } from "react";
import Pitch4 from "../pages/PitchsDetails/Pitch4";

export default function PitchCarousel({ pitches }) {
    const sliderRef = useRef(null);
    const [showTermSheet, setShowTermSheet] = useState(false);
    const NextArrow = ({ className, style, onClick }) => (
        <div
            className={`${className} custom-next z-50 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center cursor-pointer m-2`}
            style={{ ...style }}
            onClick={onClick}
        >
            ›
        </div>
    );

    const PrevArrow = ({ className, style, onClick }) => (
        <div
            className={`${className} custom-prev z-50 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center cursor-pointer m-2`}
            style={{ ...style }}
            onClick={onClick}
        >
            ‹
        </div>
    );


    const settings = {
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        beforeChange: (current, next) => {
            if (current === 3 && next === 2) {
                setShowTermSheet(false);
            }
        },
    };
    const goToNextSlide = () => {
        console.log("Going to next slide", sliderRef.current);
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };
    const handleShowTermSheet = () => {
        setShowTermSheet(true);
        // Go to the new slide after adding it
        setTimeout(() => {
            if (sliderRef.current) sliderRef.current.slickNext(3);
        }, 50);
    };
    return (
        <Box sx={{ width: "100%", maxWidth: 1200, px: 2, py: 2 }}>
            <Slider ref={sliderRef} {...settings}>

                <div>
                    <Pitch1 />
                </div>
                <div>
                    <Pitch2 goToNextSlide={goToNextSlide} onViewTermSheet={handleShowTermSheet} />
                </div>
                <div>
                    <Pitch3 onViewTermSheet={handleShowTermSheet} />
                </div>
                {showTermSheet && (
                    <div>
                        <Pitch4 />
                    </div>
                )}

            </Slider>
        </Box>
    );
}
