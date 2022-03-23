import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            
            <div className='countries'>
            {
                countries.map(country => <Country country={country}
                key={country.name}></Country>)
            }
            </div>
        </div>
    );
}

export default Countries;