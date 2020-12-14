import React from 'react';
import { withRouter } from 'react-router-dom';

import DetailsSliderItem from './details-slider-item'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const DetailsSliders = ({ items }) => {

        const settings = {
          dots: true,
          arrows: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          prevArrow: true,
          nextArrow: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        };
    
        function SamplePrevArrow(props) {
          const { className, style, onClick } = props;
          return (
            <div
              className={className}
              style={{ ...style, display: "flex", background: "black" }}
              onClick={onClick}
            />
          );
        }
    
        function SampleNextArrow(props) {
          const { className, style, onClick } = props;
          return (
            <div
              className={className}
              style={{ ...style, display: "flex", background: "black" }}
              onClick={onClick}
            />
          );
        }
    
        return (<Slider {...settings}>
         {items
        .map(item => (
          <DetailsSliderItem key={item.id} {...item} />
        ))}
        </Slider>)
      };

export default withRouter(DetailsSliders);
