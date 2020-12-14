import React from 'react';
import { selectItemById } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux';
import DetailsSliders from './details-sliders.component'
import { addItem } from '../../redux/cart/cart.actions';

import {
    DetailsContainer,
    ImgContainer,
    SlidersContainer,
    SliderImgContainer,
    IconContainer,
    DescriContainer,
    TextContainer,
    AddCartContainer,
    Description,
    Review,
    SpanContainer
} from './details.styles'

export const Details = ({ item,addItem }) => {
    return (
        <DetailsContainer>
                <ImgContainer src={item.imageUrl} />
                <TextContainer>
                <IconContainer src='https://i.ibb.co/V2KmrQC/3.jpg'/> 
            <SpanContainer><span>商品詳細：</span> <br></br></SpanContainer>
                <span>名称：{item.name}</span><br></br>
                <span>サイズ：{item.size}</span><br></br>
                <span>価額：{item.price}</span><br></br>
                </TextContainer>
                <AddCartContainer>
                < SliderImgContainer src='https://i.ibb.co/Z8Ww8GF/shopping-cart-131964784617578573-512.png' onClick={() => addItem(item)} />
                </AddCartContainer>
            <SlidersContainer>
            <DetailsSliders items= {item.detailsImage}/> 
            </SlidersContainer>
            <div>
            <IconContainer src='https://i.ibb.co/V2KmrQC/3.jpg'/> 
            <SpanContainer><span>商品説明：</span>
            </SpanContainer>
            <DescriContainer>{item.description}</DescriContainer>
            </div>
            
           
        </DetailsContainer>

    );
};
const mapStateToProps = (state, ownProps) => ({
    item: selectItemById(ownProps.match.params.id)(state)[0]
});

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });

export default connect(mapStateToProps,mapDispatchToProps)(Details);