
import React from 'react';
import './Runner.css';

const Runner = (props) =>{

    return (<div class='Runner' >
                <p> <input type='text' placeholder='Change the name'/> </p>
                <p>Name : <span>{props.name}</span></p>
                <p>Number : <span>{props.number} </span></p>
                <p>Distance : <span>{props.distance} </span> </p>
                <button>Add Km</button>
            </div>);
}

export default Runner