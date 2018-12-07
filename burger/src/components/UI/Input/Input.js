import React from 'react';

import classes from './Input.css';

const Input = (props) => {   
    
        let input;    

        switch(props.elementtype){
            case ('input'):
                input =    (<input className={ classes.Input } { ...props } onChange={props.changed} /> );
            break;

            case ('select'):
                input = (
                    <select className={ classes.Input } onChange={props.changed} > 
                        {props.options.map(option => (
                          <option value={option.value} key={option.value} > {option.displayValue} </option>  
                        ))}
                    </select>
                );
            break;

            default :
                input = (<p> Not soported : '{props.elementtype} '</p>);
        }

        
    return ( input );
    
}

export default Input;