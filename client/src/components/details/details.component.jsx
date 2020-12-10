import React from 'react';
import { selectItemById } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux';
import {
    DetailsContainer,
    ImgContainer,
    TextContainer,
    Description,
    Review,
    SpanContainer
} from './details.styles'

export const Details = ({ item }) => {
    return (
        <DetailsContainer>
            <ImgContainer>
                <img src={item.imageUrl} />
            </ImgContainer>
            <TextContainer>
                <span>Name: {item.name}</span><br></br><br></br>
                <span>Size: {item.size}</span><br></br><br></br>
                <span>Price: ${item.price}</span><br></br><br></br>
            </TextContainer>
            < Description>
            <SpanContainer>商品説明</SpanContainer><br></br>
            <SpanContainer>{item.description}</SpanContainer>
            </ Description>
            <Review>
            <SpanContainer>レビュー</SpanContainer><br></br>
            <SpanContainer>{item.review[0].comment}</SpanContainer>
            </ Review>
        </DetailsContainer>

    );
};
const mapStateToProps = (state, ownProps) => ({
    item: selectItemById(ownProps.match.params.id)(state)[0]
});

export default connect(mapStateToProps)(Details);