import React from 'react';

import classes from './Logo.css';

const logo = (props)=> (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src='https://picsum.photos/300/200?random' />
    </div>
);

export default logo;