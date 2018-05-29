
import React from 'react';
import styles from './Runner.css';

const Runner = (props) =>{

    return (<div className={styles.Runner} >
                <p> <input type='text' placeholder='Change the name' value={props.name} onChange={props.updateName}/> </p>
                <p>Name : <span>{props.name}</span></p>
                <p>Number : <span>{props.number} </span></p>
                <p>Distance : <span>{props.distance} </span> </p>
                <button onClick={props.addkm} >Add Km</button>
                <button onClick={props.changeNumber} >Change number</button>
                <button onClick={props.delete} >Delete</button>
            </div>);
}

export default Runner