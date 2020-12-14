import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
 
`;

export const ImgContainer = styled.img`
  width:250px;
  height:300px;
 

`;

ImgContainer.displayName = 'ImgContainer';

export const SliderImgContainer = styled.img`
  width:60px;
  height:60px;
 
`;

SliderImgContainer.displayName = 'SliderImgContainer';

export const SlidersContainer = styled.div`
  width:250px;
  
  margin-bottom:20px;
`;

SlidersContainer.displayName = 'SlidersContainer';


export const IconContainer = styled.img`
background-position: -18em -18em;
background-color:#eb6157;
flex-shrink: 0;
width: 1.2em;
height: 1.2em;
    display: inline-block;
    vertical-align: middle;
    background-size: 79em 79em;
    line-height: 1;
    letter-spacing: 0;
    pointer-events: none;
    speak: none;
`;

IconContainer.displayName = 'IconContainer';


export const SpanContainer = styled.span`
font-weight: bold;
font-size: 1.1em;
flex: 1 1;
vertical-align: middle;
`;

SpanContainer.displayName = 'SpanContainer';

export const DescriContainer = styled.div`
width:250px;
font-size: 1.0em;
flex: 1 1;
vertical-align: middle;

border-style: ridge;
`;

DescriContainer.displayName = 'DescriContainer';

export const TextContainer = styled.div`
  width:220px;
  cursor: pointer;
  position: absolute;
  margin-left:260px;
`;

TextContainer.displayName = 'TextContainer';

export const AddCartContainer = styled.div`
  cursor: pointer;
  margin-left:270px;
  margin-top: 200px;
  background-color:#eb6157;
  position: absolute;
`;

AddCartContainer.displayName = 'AddCartContainer';


export const Description = styled.div`
  width:200px;
  height:200px;
`;

Description.displayName = 'Description';

export const Review = styled.div`
  margin-left:250px;
  width:200px;
  margin-top:-200px;
  border-top-style:double;
`;

Review.displayName = 'Review';