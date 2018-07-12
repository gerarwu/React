import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildConstrols/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
    salad: 5,
    bacon: 10,
    cheese: 15,
    meat: 20
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 0,
        purchasable : false,
        purchasing: false
    };

    updatePurchesable(ingredients){
        let sum = Object.keys(ingredients)
        .map((key)=>{
            return ingredients[key];
        })
        .reduce((acum, currently)=>{
            return acum+currently;
        },0);

        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldMount = this.state.ingredients[type];        
        const updateMount = oldMount+1;        
        const cloneData = {...this.state.ingredients};
        cloneData[type] = updateMount;

        const oldPrice = this.state.totalPrice;
        const updatePrice = oldPrice + INGREDIENTS_PRICE[type]; 

        this.setState({ingredients:cloneData, totalPrice : updatePrice});
        this.updatePurchesable(cloneData);
    }

    removeIngredientHandler = (type)=>{
        const oldMount = this.state.ingredients[type];  
        if(oldMount <= 0){
            return false;
        }
        const updateMount = oldMount-1;        
        const cloneData = {...this.state.ingredients};
        cloneData[type] = updateMount;

        const oldPrice = this.state.totalPrice;
        const updatePrice = oldPrice - INGREDIENTS_PRICE[type]; 

        this.setState({ingredients:cloneData, totalPrice : updatePrice});
        this.updatePurchesable(cloneData);
    }
    
    purchaseHandler = ()=>{
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = ()=>{
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = ()=>{
        console.log("continue");
    }

    render(){
        const disabledButtons = {...this.state.ingredients};

        for(let key in disabledButtons){            
            disabledButtons[key] =  this.state.ingredients[key] <= 0            
        }        
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        purchaseCancelHandler={this.purchaseCancelHandler}
                        purchaseContinueHandler={this.purchaseContinueHandler}
                        />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledButtons}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}/>                
            </Aux>
        );
    }
}

export default BurgerBuilder;