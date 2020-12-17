import React from 'react';
import { withRouter } from 'react-router-dom';
import {SliderImgContainer} from '../sliderItem/sliderItem.styles'
export const SliderXX = ({ items, history }) => (
    <div>
        {items
        .map(item => (
          <a onClick={() => history.push(`/details/${item.id}`)}>
          <SliderImgContainer src={item.imageUrl} item={item}/>
      </a>
        ))}
        </div>       
        );

export default withRouter(SliderXX);
