import React from 'react';
import './Country-styles.css'

export const CountryCard = (props)=>(
    <div className='card-container'>
        <img 
        alt={`${props.country.name}`}
        src={`https://source.unsplash.com/random/180x180/?${props.country.name}`}
        />
        <h1>{props.country.name}</h1>
        <p>{props.country.alpha3Code}</p>
    </div>
);