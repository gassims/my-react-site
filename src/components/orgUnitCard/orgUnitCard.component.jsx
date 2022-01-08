import React from 'react';
import './orgUnit.styles.css'

export const OrgUnitCard = (props)=>(
    <div className='card-container'>
        <img 
        alt="Organisation Unit"
        src={`https://source.unsplash.com/random/180x180/?${props.orgUnit.name}`}
        />
        <h1>{props.orgUnit.name}</h1>
        <p>{props.orgUnit.alpha3code}</p>
    </div>
);