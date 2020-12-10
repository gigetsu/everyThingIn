import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  width:100%;
  float:left;
`;

ImgContainer.displayName = 'ImgContainer';

export const TextContainer = styled.div`
  width:300px;
  cursor: pointer;
  position: absolute;
  margin-left:260px;
  margin-top:10%;
`;

TextContainer.displayName = 'TextContainer';

export const SpanContainer = styled.span`
  width:300px;
  margin-left:50px;
`;

SpanContainer.displayName = 'SpanContainer';

export const Description= styled.div`
  width:200px;
  height:200px;
  background-color:#c8faec8c;
  border-top-style:double;
`;

Description.displayName = 'Description';

export const Review= styled.div`
  margin-left:250px;
  width:200px;
  margin-top:-200px;
  border-top-style:double;
`;

Review.displayName = 'Review';