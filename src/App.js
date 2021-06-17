// import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchData } from "./Api/Api";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Chart/Chart"

function App() {
  // const url = 'https://covid19.mathdro.id/api';
    const [info, setInfo] = useState({})

    // const [dailyData, setDailyData] = useState({});

    useEffect(() => {
      const fetchMyAPI = async () => {
        const initialDailyData = await fetchData();
  
        setInfo(initialDailyData);
      };
  
      fetchMyAPI();
    }, []);
  
      // useEffect(() => {
      //     fetch(url)
      //     .then(response => response.json())
      //     .then(data => setInfo(data) )
      //     .catch(err =>console.log(err))

      // },[])
  
      
    
// console.log(data);
  return (
    <div className="App">
      <Cards covidInfo={info}></Cards>
      <Cart></Cart>
    </div>
  );
}

export default App;
