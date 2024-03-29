import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import SmartphoneSlider from "./images/smartphones slider.webp";
import LaptopSlider from "./images/Laptop slider.webp";
import GrocerySlider from "./images/grocery slider.webp";
import HomedecorSlider from "./images/decoration slider.webp";
import FragranceSlider from "./images/perfumes slider.webp";
import SkincareSlider from "./images/skincare slider.webp";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos
        style={{
          color: "white",
        }}
      />
    </div>
  );
};

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos
        style={{
          color: "white",
        }}
      />
    </div>
  );
};

const SliderBar = () => {
  const images = [
    SmartphoneSlider,
    LaptopSlider,
    SkincareSlider,
    GrocerySlider,
    HomedecorSlider,
    FragranceSlider,
  ];

  return (
    <div>
      <div className="w-[96vw] min-h-[450px] bg-slate-200 mx-3 mt-1 pt-[100px]">
        <div>
          <Slider
            autoplay
            autoplaySpeed={2000}
            dots
            initialSlide={2}
            infinite
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
            customPaging={(i) => {
              return (
                <div>
                  <img
                    src={images[i]}
                    alt="Slider"
                    className="w-auto h-[100px] object-contain pt-[64px]"
                  />
                </div>
              );
            }}
            dotsclassName="slick-dots custom-indicator"
          >
            {images.map((item, index) => (
              <div key={index}>
                {item && (
                  <img
                    src={item}
                    alt="Slider"
                    className="w-[100%] h-[38vh] object-contain"
                  />
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderBar;
