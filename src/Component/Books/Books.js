import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css';
import SBooks from './Select-Books/SBooks';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    // add to cart function
    const cartClick=(clickBook)=>{
        console.log(clickBook.id);
        if(cart.length >5){
            console.log('js')
        }
        const newCart = [...cart, clickBook];
        setCart(newCart);
        console.log(cart)

    }
    
    return (
        <div className='div-parent' >
            <div className='books-area' >
                {
                    books.map(book=><Book book={book} key={book.id} cartClick={cartClick}></Book>)
                }
            </div>
            <div className='selected-books' >
                <h1>Selected Books</h1>
                <div>
                    {
                        cart.map(selectCart=><SBooks selectCart={selectCart} key={selectCart.id}></SBooks>)
                    }
                </div>
                <div>
                    <button className='chooseBtn' >Choose 1 for me</button>
                    <button className='chooseBtn' >Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Books;