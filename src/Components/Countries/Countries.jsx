import React, { use } from 'react';
import Country from '../Country/Country';



const Countries = ({ countriesPromises }) => {

    const countriesData = use(countriesPromises);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>World Countries On The Go... {countries.length}</h1>
            {
                countries.map(country => <Country country={country}></Country>)
            }

        </div >
    );
};

export default Countries;