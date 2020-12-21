import React, { useEffect } from 'react';
import { selectItemById, selectItemImg } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux';
import DetailsSliders from './details-sliders.component'
import { addItem } from '../../redux/cart/cart.actions';
import { setSelectedImg } from '../../redux/detailitem/detailitem.action';

import {
    DetailsContainer,
    ImgContainer,
    SlidersContainer,
    ServiceText,
    SliderImgContainer,
    ImgCampaign,
    Zaikouimage,
    SpanContainer1,
    ZaikouSpan,
    TContainer,
    Tspan,
    Zaikou,
    Zaikou1,
    LContainer,
    Limage,
    IconContainer,
    DescriContainer,
    Service,
    Timage,
    TextContainer,
    AddCartContainer,
    ZaikouContainer,
    ZaikouContainer1,
    SpanContainer,
    DtStyle,
    DlStyle
} from './details.styles'

export const Details = ({ item, addItem, selectedImg, setItemImg}) => {
    useEffect(() => {
        setItemImg(item);
      //},useEffect);
    },[item]);

    if (item) {

        return (
            <DetailsContainer>
                <ImgContainer src={selectedImg} />
                <Service>
                    <ServiceText>
                        <DlStyle>
                            <DtStyle>納品方法</DtStyle>
                            <dd><span>玄関先まで納品</span></dd>
                            <DtStyle>返品.交換</DtStyle>
                            <dd>14間返品可能</dd>
                        </DlStyle>
                        <ImgCampaign src='https://i.ibb.co/558MD1F/free-shipping.jpg'></ImgCampaign>
                        <span>数量：<input type="text" placeholder="1" size="5" maxLength="3"></input></span><br></br><br></br>
                        <span>価額：{item.price}$</span><br></br>
                        <AddCartContainer onClick={() => addItem(item)} >
                            < SliderImgContainer src='https://i.ibb.co/Z8Ww8GF/shopping-cart-131964784617578573-512.png' ></ SliderImgContainer>
                            <SpanContainer1>カートに入れる</SpanContainer1>
                        </AddCartContainer>
                        <a href='https://www.its-mo.com/search/addr/'>
                            <ZaikouContainer1 >
                                <Zaikou1 src='https://i.ibb.co/BNjbQC9/images.png'>
                                </Zaikou1>
                                <ZaikouSpan>在庫確認</ZaikouSpan>
                            </ZaikouContainer1>
                        </a>
                        <a href='https://www.its-mo.com/search/addr/'>
                            <ZaikouContainer>
                                <Zaikou>
                                    <Zaikouimage src='https://i.ibb.co/vZw9g90/96-967783-solid-black-heart-clipart-grey-heart-icon-transparent.jpg'></Zaikouimage>
                                </Zaikou>
                                <ZaikouSpan>お気に入り</ZaikouSpan>
                            </ZaikouContainer>
                        </a>
                        <TContainer>
                            <Timage src='https://i.ibb.co/Vj0X8vM/image.png'></Timage>
                            <a href='https://twitter.com/login?lang=ja'><Tspan>ツイート</Tspan></a>
                        </TContainer>
                        <LContainer>
                            <Limage src='https://i.ibb.co/mCRMVM0/image.png' ></Limage>
                            <a href='https://developers.line.biz/ja/services/line-login/'><Tspan>LINE</Tspan></a>
                        </LContainer>
                    </ServiceText>

                </Service>
                <TextContainer>
                    <IconContainer src='https://i.ibb.co/V2KmrQC/3.jpg' />
                    <SpanContainer><span>商品詳細：</span> <br></br></SpanContainer>
                    <span>名称：{item.name}</span><br></br>
                    <span>サイズ：{item.size}</span><br></br>
                    <span>価額：{item.price}</span><br></br>
                </TextContainer>

                <SlidersContainer>
                    <DetailsSliders items={item.detailsImage} backgroundImg={item.imageUrl} />
                </SlidersContainer>
                <div>
                    <IconContainer src='https://i.ibb.co/V2KmrQC/3.jpg' />
                    <SpanContainer><span>商品説明：</span>
                    </SpanContainer>
                    <DescriContainer>{item.description}</DescriContainer>
                </div>
            </DetailsContainer>

        );
    }
    else
        return null;
};
const mapStateToProps = (state, ownProps) => ({
    item: selectItemById(ownProps.match.params.id)(state)[0],
    selectedImg: selectItemImg(state)
});

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    setItemImg : item => dispatch(setSelectedImg(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);