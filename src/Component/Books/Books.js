import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css';
import SBooks from './Select-Books/SBooks';
import '.././Books/Select-Books/SBooks.css';

const Books = () => {
    const [books, setBooks] = useState([]);
    let [cart, setCart] = useState([]);
    const [choosenCart, setChoosenCart] = useState({});
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
    const RandomNumber=()=>{
        document.getElementById('randItem').style.display='block';
        const length = cart.length;
        const randomNumber = Math.floor(Math.random() * length -1 )+1;
        const singleItem = cart[randomNumber];
        setChoosenCart(singleItem);
    }
    // clear select item
    const selectAgain=()=>{
        document.getElementById('randItem').style.display='none';
        setCart([]);
        setChoosenCart({});
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
                    {/* <p>Random Selection: {choosenCart && choosenCart.name}</p> */}
                    <div id='randItem' style={{display:'none'}} >
                        <h2>Random Selection:</h2>
                        <br />
                        <div className='selected-items'>
                            <span> <br /><img className='select-image' src={choosenCart.image} alt="" /></span> <span>{choosenCart.name}</span>
                        </div>
                    </div>
                    <button className='chooseBtn' onClick={()=>{RandomNumber()}}>Random Select</button>
                    <button className='chooseBtn' onClick={()=>{selectAgain()}} >Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Books;