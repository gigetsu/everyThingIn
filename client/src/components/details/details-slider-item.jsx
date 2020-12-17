import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    SliderImgContainer,
    ImgContainer,
} from './details.styles'
export const DetailsSliderItem = ({
    id, imageUrl, history, item
}) => {

function changeImage(){
return (
    <ImgContainer src={imageUrl} />
)
}

    return (<SliderImgContainer src={imageUrl} item={item} onClick = {changeImage()}/>)
      

};

export default withRouter(DetailsSliderItem);
