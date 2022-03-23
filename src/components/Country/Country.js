import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, capital, area, population, flag} = props.country;
    return (
        <div className='container'>
            <img width={200} src={flag} alt="" />
            <h2>{name}</h2>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area}</h3>
            <h3>Population: {population}</h3>
        </div>
    );
};

export default Country;