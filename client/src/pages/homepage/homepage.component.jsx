import React , { useEffect, lazy, Suspense }from 'react';

import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';
import SliderItems from '../../components/sliderItems/slideritemsContainer';
const SliderItemsContainer = lazy(() =>
  import('../../components/sliderItems/slideritemsContainer')
);
const HomePage = () => (
  <HomePageContainer>
    <SliderItemsContainer />
    <Directory /> 
  </HomePageContainer>
);

export default HomePage;
