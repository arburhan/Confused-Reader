import React from 'react';

const RandomNumber = ({cart}) => {
    console.log(cart)
    const randomNumber = Math.floor(Math.random()*11);
    if(randomNumber === cart.id){
        console.log('hello');
    }
    return (
        <div>
            
        </div>
    );
};

export default RandomNumber;