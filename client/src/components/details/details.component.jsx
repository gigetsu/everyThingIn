import React from 'react';
import { withRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Router, browserHistory } from 'react-router';
import { selectSliders } from '../../redux/sliderItems/sliderItems.selectors'
import { connect } from 'react-redux';

export const Details = ({ items}) => {
    return (
<div>
        <h>{items[0].id}</h>
        </div>   
             
        );
      };
const mapStateToProps = (state, ownProps) => ({
    items: selectSliders(ownProps.match.params.id)(state)
});


export default connect(mapStateToProps)(Details);