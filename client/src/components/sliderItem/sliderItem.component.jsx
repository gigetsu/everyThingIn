import React from 'react';
import { withRouter } from 'react-router-dom';
import {SliderImgContainer} from './sliderItem.styles';
import Details from '../details/details.component';

export const SliderItem = ({
    id, history, item 
}) => {
      return (
        <a onClick={() => history.push(`/details/${item.id}`)}>
            <SliderImgContainer src={item.imageUrl} item={item} />
        </a>
      )

};

export default withRouter(SliderItem);
