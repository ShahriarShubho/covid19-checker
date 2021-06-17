// import axios from "axios";
import React, { useEffect, useState } from "react";
// import { fetchData } from "./Api/Api";
import "./App.css";
import Cards from "./Components/Cards/Cards";

function App() {
  const url = 'https://covid19.mathdro.id/api';
    const [info, setInfo] = useState({})
  
      useEffect(() => {
          fetch(url)
          .then(response => response.json())
          .then(data => setInfo(data) )
          .catch(err =>console.log(err))

      },[])
  
      
    
// console.log(data);
  return (
    <div className="App">
      <Cards covidInfo={info}></Cards>
    </div>
  );
}

export default App;
