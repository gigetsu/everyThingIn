import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SliderItemsPage from './slideritemspage.component';

import { sortSliderItems } from '../../redux/shop/shop.selectors';

export const SliderItemsView = ({ items }) => {
  console.log();
  console.log();
  return (
    <div>
    <SliderItemsPage items= {items}/> 
    </div>        
    )
}       

const mapStateToProps = createStructuredSelector({
  items: sortSliderItems
});

export default connect(mapStateToProps)(SliderItemsView);
