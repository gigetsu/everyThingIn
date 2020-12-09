import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SliderItemsPage from './slideritemspage.component';

import { selectItems } from '../../redux/shop/shop.selectors';

export const SliderItemsView = ({ items }) => {
    console.log("@@@@@@@@@@@@@@@@@@@@@@" +items );
    return (
        <div>      
            <SliderItemsPage key= {items.id} items= {items}/>         
          </div>
    )
        };

const mapStateToProps = createStructuredSelector({
  items: selectItems
});

export default connect(mapStateToProps)(SliderItemsView);
