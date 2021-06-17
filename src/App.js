import React, { useEffect, useState } from "react";
import { fetchData } from "./Api/Api";
import styles from './App.module.css';
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Chart/Chart";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import Footer from "./Components/Footer/Footer";

function App() {
  const [info, setInfo] = useState({});
  const [country, setCountries] = useState("");

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
    setCountries(country);
  };
  console.log(country);
  return (
    <div className={styles.container}>
       <img className={styles.image} src='https://i.ibb.co/7QpKsCX/image.png' alt="COVID-19" />
      <Cards covidInfo={info}></Cards>
      <CountryPicker handleChange={handleChange}></CountryPicker>
      <Cart covidInfo={info} country={country}></Cart>
      <Footer/>
    </div>
  );
}

export default App;
