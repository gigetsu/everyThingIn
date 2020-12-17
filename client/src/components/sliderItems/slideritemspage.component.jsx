import React from 'react';
import { withRouter } from 'react-router-dom';

import SliderItem from '../sliderItem/sliderItem.component';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SliderItemsPage = ({ items }) => {

        const settings = {
          dots: true,
          arrows: true,
          infinite: false,
          speed: 500,
          slidesToShow: 5,
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
          <SliderItem key={item.id} item={item} />
        ))}
        </Slider>)
      };

export default withRouter(SliderItemsPage);
