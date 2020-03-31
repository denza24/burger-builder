import React from 'react';
import './Burger.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = (props) => {

    //mapiramo svaki key(naziv sastojka) te vracamo JSX code sa indeksom 
    let transformedIngredients = Object.keys(props.ingredients)
        .map(strIngr => {
            return [...Array(props.ingredients[strIngr])].map((_, index) => {

                return <Ingredient
                    key={strIngr + index}
                    type={strIngr} />
            });

        }).reduce((arr, el) => {

            return arr.concat(el);

        }, []);


    if (transformedIngredients.length === 0) {
        transformedIngredients = <p> Please start adding ingredients</p>;
    }

    return (

        <div className='Burger'>
            <Ingredient type='bread-top' />
            {transformedIngredients}
            <Ingredient type='bread-bottom' />
        </div>

    );



};

export default Burger;