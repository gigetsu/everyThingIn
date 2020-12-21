import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changebckImg } from '../../redux/detailitem/detailitem.action';
import {
    SliderImgContainer,
    ImgContainer,
} from './details.styles'
export const DetailsSliderItem = ({
    id, imageUrl, history, item, backgroundImg, dispatch, changebckImg
}) => {

    return (<SliderImgContainer src={imageUrl} item={item} 
        onClick={() => changebckImg()}/>)
};

const mapDispatchToProps = dispatch => ({
    changebckImg: () => dispatch(changebckImg())
  });

export default withRouter(connect(
    null,
    mapDispatchToProps
  )(DetailsSliderItem));
