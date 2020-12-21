import styled from 'styled-components';

export const DetailsContainer = styled.div`
width: 100%;
max-width: 1240px;
padding-right: 20px;
padding-left: 20px;
display: grid;
margin-left:auto;
margin-right:auto;
`;

export const ImgContainer = styled.img`
  width:250px;
  height:300px;
  float:left;
`;

ImgContainer.displayName = 'ImgContainer';

export const SliderImgContainer = styled.img`
  width:60px;
  height:60px;
 float: left;
`;

SliderImgContainer.displayName = 'SliderImgContainer';

export const SlidersContainer = styled.div`
  width:250px;
  margin-bottom:20px;
`;

SlidersContainer.displayName = 'SlidersContainer';

export const ZaikouSpan = styled.span`
  float:centert;
`;

ZaikouSpan.displayName = 'ZaikouSpan';

export const ZaikouContainer = styled.div`
margin-top:7px;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
margin-left:50px;
`;

ZaikouContainer.displayName = 'ZaikouContainer';

export const ZaikouContainer1 = styled.div`
margin-top:7px;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
margin-left:5px;
position: absolute;
`;

ZaikouContainer1.displayName = 'ZaikouContainer1';

export const Zaikou = styled.div`
color: #fff;
border-color: #eb6157;
background-color: #eb6157;
font-size: 2.0rem;
    display: flex;
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
    border: 2px solid #dbdbdb;
    border-radius: 50%;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

Zaikou.displayName = 'Zaikou';

export const Zaikou1 = styled.img`
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
    border: 2px solid #dbdbdb;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
`;

Zaikou1.displayName = 'Zaikou1';

export const Zaikouimage = styled.img`
flex-shrink: 0;
    width: 0.9em;
    height: 0.9em;
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
    border: none;
    background-size: 79em 79em;
    line-height: 1;
    letter-spacing: 0;
    pointer-events: none;
    speak: none;
    `;

Zaikouimage.displayName = 'Zaikouimage';



export const Timage = styled.img`
position: relative;
width: 24px;
height: 22px;
float:left;
margin:0px;
display: inline-block;
`;

Timage.displayName = 'Timage';

export const Limage = styled.img`
position: relative;
width: 24px;
height: 22px;
float:left;
margin:0px;
display: inline-block;
`;

Limage.displayName = 'Limage';

export const TContainer = styled.div`
width: 90px;
    height: 22px;
    box-sizing: border-box;
    padding: 0px;
    background-color: rgba(29,161,242,1.00);
    color: #fff;
    border-radius: 3px;
    font-weight: 500;
    margin:5px;
    cursor: pointer;
    float:right;
`;

TContainer.displayName = 'TContainer';

export const LContainer = styled.div`
width: 90px;
position: absolute;
float:left;
    height: 22px;
    box-sizing: border-box;
    padding: 0px;
    background-color: #00B900;
    color: #fff;
    border-radius: 3px;
    font-weight: 500;
    margin:5px;
    cursor: pointer;
`;

LContainer.displayName = 'LContainer';

export const TtextContainer = styled.div`
position: relative;
    height: 20px;
    box-sizing: border-box;
    padding: 1px 8px 1px 6px;
    background-color: #1b95e0;
    color: #fff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    zoom: 1;
`;

TtextContainer.displayName = 'TtextContainer';

export const Service = styled.div`
  width:290px;
  height:588px;
  padding:30px;
  background-color:#f7f7f7;
  margin-bottom:20px;
  margin-left:550px;
  position: absolute;

`;

Service.displayName = 'Service';

export const ServiceText = styled.div`
position: relative;
box-sizing: border-box;
font-size: 1rem;
line-height: 1.42857;
font-family: sans-serif;
background-color:#f7f7f7;
overflow-x: hidden;
    height: 100%;
    margin: 0;
    color: #333;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;

`;

ServiceText.displayName = 'ServiceText';

export const DlStyle = styled.div`
display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    border-bottom: 1px solid #dbdbdb;

`;

DlStyle.displayName = 'DlStyle';

export const DtStyle = styled.div`
float: left;
    clear: left;
    padding: 10px 0;

`;

DtStyle.displayName = 'DtStyle';


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

export const ImgCampaign = styled.img`
  width:250px;
  height:70px;
  float:left;
  margin:5px;
`;

ImgCampaign.displayName = 'ImgCampaign';


export const SpanContainer = styled.span`
font-weight: bold;
font-size: 1.1em;
flex: 1 1;
vertical-align: middle;
`;

SpanContainer.displayName = 'SpanContainer';

export const Tspan = styled.span`
color: #fff;
`;

Tspan.displayName = 'Tspan';

export const SpanContainer1 = styled.span`
flex: 0 1 auto;
font-size: 1.4em;
display: flex;
    min-height: 46px;
    padding: 0px 18px 5px 0px;
    transform: translateX(5px);
    align-items: center;
    justify-content: center;
    height: 100%;
    float;left;
    color:#fff;
}
`;

SpanContainer1.displayName = 'SpanContainer1';

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
  float:left;
  margin-top:20px;
`;

TextContainer.displayName = 'TextContainer';

export const AddCartContainer = styled.div`
  cursor: pointer;
  margin-top: 10px;
  background-color:#eb6157;
  width: 250px;
    height: 55px;
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