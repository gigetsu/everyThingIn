import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Router, browserHistory } from 'react-router';
import Details from '../details/details.component';
export const SliderItem = ({
    id, name, price, imageUrl, history, dispatch,
    match
}) => (
    <a onClick={() => history.push(`/details/${id}`)}>
            <img src={imageUrl} />
        </a>

    );

export default withRouter(SliderItem);
