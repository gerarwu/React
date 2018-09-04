import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ()=>(
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo height='80%' />
        <NavigationItems />
    </header>
);

export default toolbar;