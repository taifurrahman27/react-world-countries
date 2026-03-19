import React from 'react';

const Country = ({ country }) => {


    const currencyMap = country.currencies.currencies;
    const currencyName = Object.values(currencyMap).map(item => item.name);
    const currencySymbol = Object.values(currencyMap).map(item => item.symbol);

    return (
        <div>

            <img src={country.flags.flags.png} alt={country.flags.flags.al} />
            <h5>Continent: {country.continents.continents}</h5>
            <h3>Name:  {country.name.common} </h3>
            <h4>Capital: {country.capital.capital}</h4>
            <p>Population: {country.population.population}</p>
            <p>Currencies:  {currencyName}(  {currencySymbol})</p>

        </div>
    );
};

export default Country;