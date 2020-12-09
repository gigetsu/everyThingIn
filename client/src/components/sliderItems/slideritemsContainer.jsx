import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import SliderItemsView from './slideritemsview.component'

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

const SliderItemsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SliderItemsView);

export default SliderItemsContainer;
