import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changebckImg } from '../../redux/detailitem/detailitem.action';
import {
    SliderImgContainer,
} from './details.styles'
export const DetailsSliderItem = ({
    imageUrl, item, changebckImg
}) => {
    
    return (<SliderImgContainer src={imageUrl} item={item} 
        onClick={() => {changebckImg(imageUrl);}}
        />)
};

const mapDispatchToProps = dispatch => ({
    changebckImg: imageUrl => dispatch(changebckImg(imageUrl))
  });

export default withRouter(connect(
    null,
    mapDispatchToProps
  )(DetailsSliderItem));
