import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildCotrols from '../../components/BuildConstrols/BuildControls';

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
        totalPrice : 0
    };

    addIngredientHandler = (type) => {
        const oldMount = this.state.ingredients[type];        
        const updateMount = oldMount+1;        
        const cloneData = {...this.state.ingredients};
        cloneData[type] = updateMount;

        const oldPrice = this.state.totalPrice;
        const updatePrice = oldPrice + INGREDIENTS_PRICE[type]; 

        this.setState({ingredients:cloneData, totalPrice : updatePrice});
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
    }
    

    render(){
        const disabledButtons = {...this.state.ingredients};

        for(let key in disabledButtons){            
            disabledButtons[key] =  this.state.ingredients[key] <= 0            
        }        
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildCotrols 
                    addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledButtons}
                    price={this.state.totalPrice}/>                
            </Aux>
        );
    }
}

export default BurgerBuilder;