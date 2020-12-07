import React from 'react';

import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';
import SliderItems from '../../components/sliderItems/sliderItems.component';

const HomePage = () => (
  <HomePageContainer>
    <SliderItems/>
    <Directory /> 
  </HomePageContainer>
);

export default HomePage;
