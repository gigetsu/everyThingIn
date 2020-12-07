import React from 'react';
import { withRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Router, browserHistory } from 'react-router';
export const Details = ({
    id, imageUrl
}) => (
        console.log(id),
        console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm'),
        <div>
            <img src={imageUrl} ></img>
            <h>bbbbbbbbbbbbbbbbbbbbbbbbbbbbb</h>
        </div>
    )



export default withRouter(Details);