import React from 'react';
import './orgUnit-list.styles.css';
import {OrgUnitCard} from '../orgUnitCard/orgUnitCard.component';

export const OrgUnitList = (props) => (
    <div className='card-list'>
        {props.orgUnits.map(
            orgUnit => 
            <OrgUnitCard key={orgUnit.alpha3code}
            orgUnit={orgUnit} />
        )}
    </div>
);