import React, { useState } from 'react';
import './Country.css'


const Country = ({ country, handleVisitedCountries }) => {


    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        if (visited) {
            setVisited(false)
        } else {
            setVisited(true)

        }
        handleVisitedCountries(country);
    }
    const currencyMap = country.currencies.currencies;
    const currencyName = Object.values(currencyMap).map(item => item.name);
    const currencySymbol = Object.values(currencyMap).map(item => item.symbol);

    return (
        <div className={`country ${visited && 'country-visited'}`}>

            <img src={country.flags.flags.png} alt={country.flags.flags.al} />
            <h5>Continent: {country.continents.continents}</h5>
            <h3>Name:  {country.name.common} </h3>
            <h4>Capital: {country.capital.capital}</h4>
            <p>Population: {country.population.population}</p>
            <p>Currencies:  {currencyName}(  {currencySymbol})</p>
            <p>Area: {country.area.area} sqKM {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>

        </div>
    );
};

export default Country;