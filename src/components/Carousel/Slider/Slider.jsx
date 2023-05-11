import React, { useState, useEffect } from "react";
import './Slider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import VideoCard from "../VideoCard/VideoCard";


function SliderVideos({ videos }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="slider__container">
            <h2>Single Item</h2>
            <Slider {...settings} className="slider">
                {
                    videos.map(video => {
                        const { videoUrl, imageUrl } = video;
                        return <VideoCard videoUrl={ videoUrl } imageUrl={ imageUrl }/>
                    })
                }
            </Slider>
        </div>
    )
}

export default SliderVideos;