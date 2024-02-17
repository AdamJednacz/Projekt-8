import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight , faAngleLeft } from "@fortawesome/free-solid-svg-icons";



import adidas from "../assets/adidas.png";
import puma from "../assets/puma.png";
import nike from "../assets/Nike-Logo.png";
import reebok from "../assets/reebok.png";
import kappa from "../assets/kappa.png";
import quiksilver from "../assets/quiksilver.png";
import newbalance from "../assets/newbalance.png";
import asics from "../assets/asics.png";

const brandImages = { adidas, puma, nike, reebok, kappa, quiksilver, newbalance, asics };

const MainBrands = () => {
    const settings = {
        dots: true, // Wyświetlaj kropki
        arrows: true, // Wyświetlaj strzałki
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <FontAwesomeIcon icon={faAngleLeft} />, // Użyj ikony strzałki w lewo
        nextArrow: <FontAwesomeIcon icon={faAngleRight}  />, // Użyj ikony strzałki w prawo
    };

    return (
        <div className="main_choose_brand">
            <h1>Choose Your Brand:</h1>
            <div className="main_choose_brand_brand">
                <Slider {...settings}>
                    {Object.entries(brandImages).map(([brandName, imageUrl]) => (
                        <div key={brandName} className="main_choose_brand_brand_container">
                            <img src={imageUrl} alt={brandName} className="brand_icon" />
                            <p>{brandName}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default MainBrands;
