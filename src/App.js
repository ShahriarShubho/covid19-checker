// import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchData } from "./Api/Api";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Chart/Chart"
import CountryPicker from './Components/CountryPicker/CountryPicker'

function App() {

    const [info, setInfo] = useState({})

    useEffect(() => {
      const fetchMyAPI = async () => {
        const initialDailyData = await fetchData();
  
        setInfo(initialDailyData);
      };
  
      fetchMyAPI();
    }, []);
  
    const handleChange = async (country) => {
      console.log(country);
      console.log(fetchData)
    }

  return (
    <div className="App">
      <Cards covidInfo={info}></Cards>
      <CountryPicker handleChange={handleChange}></CountryPicker>
      <Cart></Cart>
    </div>
  );
}

export default App;
