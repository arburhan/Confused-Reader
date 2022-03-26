import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css';
import SBooks from './Select-Books/SBooks';

const Books = () => {
    const [books, setBooks] = useState([]);
    let [cart, setCart] = useState([]);
    console.log(cart);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    // add to cart function
    const cartClick=(clickBook)=>{
        if(cart.length >3){
            alert("You can't add more than 4 items");
            return;
        }
        const newCart = [...cart, clickBook];
        setCart(newCart);
    }
    // random select
    // parini korte hobe
    const RandomNumber=()=>{
        cart.map(newBook=>{
            console.log(newBook.id)
        const length = cart.length;
        const randomNumber = Math.floor(Math.random() * length -1 )+1;
        console.log(randomNumber);
        })
    }
    // clear select item
    const selectAgain=()=>{
        setCart([]);
        console.log(cart);
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
                    <button className='chooseBtn' onClick={()=>{RandomNumber()}}>Random Select</button>
                    <button className='chooseBtn' onClick={()=>{selectAgain()}} >Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Books;