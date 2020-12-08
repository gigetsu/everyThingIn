import React from 'react';
import { selectSliders } from '../../redux/sliderItems/sliderItems.selectors'
import { connect } from 'react-redux';
import {
    DetailsContainer,
    ImgContainer,
    TextContainer
} from './details.styles'

export const Details = ({ item }) => {
    return (
        <DetailsContainer>
            <ImgContainer>
                <img src={item.imageUrl} />
            </ImgContainer>
            <TextContainer>
                <span>Name: {item.name}</span><br></br>
                <span>Size: {item.size}</span><br></br>
                <span>Price: ${item.price}</span>
            </TextContainer>
        </DetailsContainer>

    );
};
const mapStateToProps = (state, ownProps) => ({
    item: selectSliders(ownProps.match.params.id)(state)[0]
});

export default connect(mapStateToProps)(Details);