import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../Api/Api';

import styles from './CountryPicker.module.css';
const CountryPicker = ({handleChange}) => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
      const fetchAPI = async () => {
        setCountries(await fetchCountries());
      };
  
      fetchAPI();
    }, []);
    console.log(countries);
    return (
        <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleChange(e.target.value)}>
          <option value="">United States</option>
          {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
      </FormControl>
    );
};

export default CountryPicker;