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

export const TextContainer = styled.h2`
  width:300px;
  cursor: pointer;
  position: absolute;
  margin-left:320px;
  margin-top:10%;
`;

TextContainer.displayName = 'TextContainer';