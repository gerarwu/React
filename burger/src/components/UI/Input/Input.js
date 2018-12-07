import React, { Component } from 'react';

import classes from './Input.css';

class Input extends Component {   
  

    render(){         

        return (            
            <input className={ classes.Input } { ...this.props }  />            
        );
    }
}

export default Input;