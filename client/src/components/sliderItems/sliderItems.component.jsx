import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { sliderItems } from '../../redux/sliderItems/sliderItems.selectors';
import { SliderItemsContainer } from './sliderItems.component.styles';
import SliderItem from '../sliderItem/sliderItem.component';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const mapStateToProps = createStructuredSelector({
  items: sliderItems
});

export const SliderItems = ({ items}) => ({

  render() {

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
      {items.map(( item) => (
    <SliderItem key={item.id} {...item}/>
  ))}
    </Slider>)
  }
});

export default connect(mapStateToProps)(SliderItems);