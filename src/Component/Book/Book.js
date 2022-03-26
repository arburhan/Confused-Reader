import React from 'react';
import './Book.css';

const Book = ({book}) => {
    const {id, image, name, price} = book;
    return (
        <div className='card'>
            <img src={image} alt="" />
            <p>{name}</p>
            <p>BDT: {price}</p>
            <button>Add to cart</button>
        </div>
    );
};

export default Book;