import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ( props ) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( ingredientsKey => {
            return [...Array( props.ingredients[ingredientsKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={ingredientsKey + i} type={ingredientsKey} />;
            } );
        } )
        .reduce((arr, element) => {
            return arr.concat(element)
        }, []);


    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    
        
    );
};



export default Burger;