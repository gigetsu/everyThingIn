import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import SliderItemsView from '../../components/sliderItems/slideritemsview.component';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';
const HomePage = ({ isFetching }) => {
  if (isFetching)
    return null;
  else
    return (
      <HomePageContainer>
        < SliderItemsView />
        <Directory />
      </HomePageContainer>
    )
};
const mapStateToProps = (state) => ({
    isFetching : state.shop.isFetching
  });

export default connect(mapStateToProps,null)(HomePage);
