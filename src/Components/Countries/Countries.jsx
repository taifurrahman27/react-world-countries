import React, { use } from 'react';
import Country from '../Country/Country';
import "./Countries.css"


const Countries = ({ countriesPromises }) => {

    const countriesData = use(countriesPromises);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>World Countries On The Go... {countries.length}</h1>
            <div className='countries'>
                {countries.map(country => <Country country={country}></Country>)}
            </div>
        </div >
    );
};

export default Countries;