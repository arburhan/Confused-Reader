import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Book.css';

const Book = ({book,cartClick}) => {
    const {id, image, name, price} = book;
    
    return (
        <div className='card'>
            <img src={image} alt="" />
            <p className='book-name' >{name}</p>
            <p className='book-price' >BDT: {price}</p>
            <button className='addToCartBtn' onClick={()=>{cartClick(book)}} >Add to cart<FontAwesomeIcon style={{margin:'0 8px'}} icon={faShoppingCart} /></button>
        </div>
    );
};

export default Book;