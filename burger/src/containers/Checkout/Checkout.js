import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component{
    
    state= {
        ingredients : {
            salad: 2,
            meat: 4
        }
    }

    componentDidMount(){  
        let ingredients= {};
        const searchParams = new  URLSearchParams(this.props.location.search);
        for( let i of searchParams.entries() ){            
            ingredients[ i[0] ] = +i[1];
        }
    
        this.setState({ingredients: ingredients});
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = ()=> {
        console.log(this);
    }

    render(){
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}    
                    checkoutContinue={ this.checkoutContinueHandler }
                    checkoutCancel={ this.checkoutCancelHandler }
                />
            </div>
        );
    }
}

export default Checkout;