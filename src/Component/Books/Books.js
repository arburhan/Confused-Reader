import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className='div-parent' >
            <div className='books-area' >
                {
                    books.map(book=><Book book={book} key={book.id} ></Book>)
                }
            </div>
            <div className='selected-books' >
                <h1>Selected Books</h1>
            </div>
        </div>
    );
};

export default Books;