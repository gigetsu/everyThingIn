import React from 'react';
import { withRouter } from 'react-router-dom';
import {SliderImgContainer} from './sliderItem.styles'
export const SliderItem = ({
    id, imageUrl, history
}) => (
        <a onClick={() => history.push(`/details/${id}`)}>
            <SliderImgContainer src={imageUrl} />
        </a>

    );

export default withRouter(SliderItem);
