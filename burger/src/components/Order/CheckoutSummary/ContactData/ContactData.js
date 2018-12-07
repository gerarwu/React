import React, { Component } from 'react';

import Button from '../../../UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../../axios-orders';
import Spinner from '../../../UI/Spinner/Spinner';
import Input from '../../../UI/Input/Input';

class Contactdata extends Component{

    state = {
        orderForm:{
            name: this.getInputFormElementConfig('input', 'text', 'Your Name'),
            email: this.getInputFormElementConfig('input', 'email', 'Your E-mail'),
            street: this.getInputFormElementConfig('input', 'text', 'Your Street'),
            zipCode: this.getInputFormElementConfig('input', 'text', 'Your Zip Code'),
            country: this.getInputFormElementConfig('input', 'text', 'Your Country'),
            deliveryMethod:{
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest'},
                        { value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    getInputFormElementConfig(elementType, type, placeholder) {
        return {
            elementType: elementType,
            elementConfig: {
                type: type,
                placeholder: placeholder
            },
            value: ''
        }
    };

    inputChangeHandler = (element , inputIdentifier) => {

        const copyOrderForm = { ...this.state.orderForm };

        const copyElementForm = { ...copyOrderForm[inputIdentifier] };
        copyElementForm.value = element.target.value;

        copyOrderForm[inputIdentifier] = copyElementForm;
        this.setState({orderForm: copyOrderForm});
    }

    orderHandler = (e)=>{
        e.preventDefault();
        this.setState({loading: true});

        const orderForm = {};
        for(let e in this.state.orderForm){
            orderForm[e] = this.state.orderForm[e].value;
        }

        const order = {
            price: this.props.totalPrice,
            ingredients: this.props.ingredients,    
            date: new Date(),
            orderData: orderForm        
        }

        axios.post('/order.json', order).then( response => {            
            //this.setState({loading: false, purchasing: false});
            this.setState({loading: false});
            this.props.history.push('/');
        }).catch( err => {
            console.log(err);
            //this.setState({loading: false, purchasing: false});
        });
    }

    render(){

        let formElements = [];
        for(let input in this.state.orderForm){
            formElements.push({
                ...this.state.orderForm[input],
                id: input
            })
        }
        
        let form = (
            <form autoComplete='off' onSubmit={this.orderHandler}>                
                {formElements.map( formElement => (
                    <Input 
                        elementtype={formElement.elementType} 
                        name={formElement.id} 
                        key={formElement.id}                         
                        {...formElement.elementConfig} 
                        changed={(event) => this.inputChangeHandler(event, formElement.id)}
                        />
                ))}                
                <Button btnStyle='Success' >ORDER NOW!</Button>
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