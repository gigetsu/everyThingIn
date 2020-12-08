import React from 'react';
import { withRouter } from 'react-router-dom';

export const SliderItem = ({
    id, imageUrl, history
}) => (
        <a onClick={() => history.push(`/details/${id}`)}>
            <img src={imageUrl} />
        </a>

    );

export default withRouter(SliderItem);
