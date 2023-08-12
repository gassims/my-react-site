import React from 'react';
import './Country-styles.css';
import {CountryCard} from '../CountryCard/CountryCard';

export const CountryList = (props) => (
    <div className='card-list'>
        {
        props.countries.map(
            country => 
            <CountryCard key={country.alpha3Code}
            country={country} />
        )}
    </div>
);