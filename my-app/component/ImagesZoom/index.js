import React, { useState } from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";
import Slider from "react-slick";
const ImagesZoom = ({ image, onClose }) => {
  console.log("ImagesZoom", image);
  console.log("images", image);

  const [currentSlick, setCurrentSlick] = useState(0);
  const set = {
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
  };

  return (
    <div>
      <header>
        <h1>상세 이미지</h1>
        <button onClick={onClose}>X</button>
      </header>
      <div>
        <div>
          <Slider
            afterChange={(slide) => setCurrentSlick(slide)}
            initialSlide={0}
            {...set}
          >
            {image.map((v) => (
              <div key={v.src}>
                <img src={v.src} alt={v.src} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
