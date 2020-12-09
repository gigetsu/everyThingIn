import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SliderItemsPage from './slideritemspage.component';

import { selectCollections } from '../../redux/shop/shop.selectors';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
//import { selectCollectionsForSlider } from '../../redux/shop/shop.selectors';

export const SliderItemsView = ({ collections }) => (
    <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <SliderItemsPage key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections:  selectCollectionsForPreview
});

export default connect(mapStateToProps)(SliderItemsView);
