// import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchData } from "./Api/Api";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Chart/Chart"
import CountryPicker from './Components/CountryPicker/CountryPicker'

function App() {

    const [info, setInfo] = useState({})
    const [country, setCountries] = useState('')

    useEffect(() => {
      const fetchMyAPI = async () => {
        const initialDailyData = await fetchData();
  
        setInfo(initialDailyData);
      };
  
      fetchMyAPI();
    }, [setInfo]);
  
    const handleChange = async (country) => {
     
        const initialDailyData = await fetchData(country);
  
        setInfo(initialDailyData);
        setCountries(country)
      ;
      
    }
    console.log(country);
  return (
    <div className="App">
      <Cards covidInfo={info}></Cards>
      <CountryPicker handleChange={handleChange}></CountryPicker>
      <Cart covidInfo={info} country={country}></Cart>
    </div>
  );
}

export default App;
