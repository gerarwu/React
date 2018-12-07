import React, { Component } from 'react';

import Button from '../../../UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../../axios-orders';
import Spinner from '../../../UI/Spinner/Spinner';
import Input from '../../../UI/Input/Input';

class Contactdata extends Component{

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (e)=>{
        e.preventDefault();

        this.setState({loading: true});
        const order = {
            price: this.props.totalPrice,
            ingredients: this.props.ingredients,
            deliveryMethod: 'fastest',
            date: Date.now(),
            customer: {
                name: 'Gerardo Muñoz',
                email: 'gmunoz@mail.com',
                address: {
                    country: 'Mexico',
                    street: 'my street',
                    zipCode: '00110'
                }
            }
        }

        axios.post('/order.json', order).then( response => {            
            //this.setState({loading: false, purchasing: false});
            this.setState({loading: false});
        }).catch( err => {
            console.log(err);
            //this.setState({loading: false, purchasing: false});
        })
        

        console.log(this.props.ingredients);
        console.log(this.props.totalPrice);
    }

    render(){

        let form = (
            <form autoComplete='off'>
                <Input type='text' name='name' placeholder='Your Name' />
                <Input type='email' name='email' placeholder='Your Email' />
                <Input type='text' name='street' placeholder='Your Street' />
                <Input type='text' name='postal' placeholder='Your Postal Code' />
                
                <Button btnStyle='Success' clicked={this.orderHandler} >ORDER NOW!</Button>
            </form>
        );

        if(this.state.loading){
            form = ( <Spinner /> );
        }

        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact Data here!</h4>
                {form}
            </div>
        );
    }
}

export default Contactdata;