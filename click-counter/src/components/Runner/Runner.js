
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import styles from './Runner.css';

class Runner extends Component {

    constructor(props){
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount(){
        this.inputElement.current.focus();
    }

    render(){
        return (<div className={styles.Runner} >
            <p> <input type='text' placeholder='Change the name' value={this.props.name} onChange={this.props.updateName} ref={this.inputElement} /> </p>
            <p>Name : <span>{this.props.name}</span></p>
            <p>Number : <span>{this.props.number} </span></p>
            <p>Distance : <span>{this.props.distance} </span> </p>
            <button className={styles.button} onClick={this.props.addkm} >Add Km</button>
            <button className={styles.button} onClick={this.props.changeNumber} >Change number</button>
            <button className={styles.button} onClick={this.props.delete} >Delete</button>
        </div>);
    }

}

Runner.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    distance: PropTypes.number,
    addkm: PropTypes.func,
    changeNumber: PropTypes.func,
    delete: PropTypes.func,
}

export default Runner