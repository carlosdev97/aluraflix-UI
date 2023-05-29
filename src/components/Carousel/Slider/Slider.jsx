import React, { useState, useEffect } from "react";
import './Slider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import VideoCard from "../VideoCard/VideoCard";


function SliderVideos({ categorie, videos }) {

    function validateVideos() {
        if (videos.length >= 3) {
            return 3;
        } else if (videos.length == 2) {
            return 2;
        } else {
            return 1;
        }
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: validateVideos(),
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            {
                videos.length > 0 &&
                <div className="slider__container">
                    <div className="slider__info">
                        <h2 className="slider__title" style={{ backgroundColor: categorie.color }}>{categorie.nombre}</h2>
                        <div className="slider__description">{categorie.descripcion}</div>
                    </div>
                    <Slider {...settings} className="slider">
                        {
                            videos.map((video) => {
                                const { videoUrl, imageUrl } = video;
                                return <VideoCard videoUrl={videoUrl} imageUrl={imageUrl} color={categorie.color} />
                            })
                        }
                    </Slider>
                </div>
            }
        </>
    )
}

export default SliderVideos;