import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';
import { SliderItemsContainer } from './sliderItems.component.styles';
import SliderItemsOfShop from '../sliderItems/sliderItemsOfShop.component';



const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export const SliderItems = ({ collections }) => (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <SliderItemsOfShop key={id} {...otherCollectionProps} />
      ))}
    </div>     
);      

export default connect(mapStateToProps)(SliderItems);