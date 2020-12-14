import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    SliderImgContainer
} from './details.styles'
export const DetailsSliderItem = ({
    id, imageUrl, history
}) => (     
            <SliderImgContainer src={imageUrl} />

    );

export default withRouter(DetailsSliderItem);
