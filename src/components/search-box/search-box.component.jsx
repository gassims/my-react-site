import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChanges}) => (
    <input className='search' type='search' placeholder={placeholder}
      onChange={handleChanges}
      />
);