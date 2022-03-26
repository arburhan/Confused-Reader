import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './SBooks.css';
const SBooks = ({selectCart}) => {
    const {id, image, name} = selectCart;
    return (
        <div className='selected-items' >
            <span><img className='select-image' src={image} alt="" /></span> <span>{name}</span> <span> <FontAwesomeIcon style={{margin:'0 8px', cursor:'pointer'}} icon={faTrash} /> </span> 
        </div>
    );
};

export default SBooks;