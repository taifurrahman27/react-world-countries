import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"


const Countries = ({ countriesPromises }) => {

    const countriesData = use(countriesPromises);
    const countries = countriesData.countries;
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedCount, setVisitedCount] = useState(0);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }


    return (
        <div>
            <h1>World Countries On The Go... {countries.length}</h1>
            <h3>Total Countries Visited: {visitedCount}</h3>
            <div className='countries'>
                {
                    countries.map(country => <Country country={country} setVisitedCount={setVisitedCount} handleVisitedCountries={handleVisitedCountries}></Country>)

                }
            </div>
        </div >
    );
};

export default Countries;