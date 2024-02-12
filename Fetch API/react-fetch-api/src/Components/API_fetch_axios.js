import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function API_fetch_axios() {
  const [catFact, setCatFact] = useState(""); // State to store the fact

  const GetQuotes = () => {   
    axios
      .get("https://catfact.ninja/fact")
      .then((resp) => {
        console.log(resp.data.fact); // Set state with fact
        setCatFact(resp.data.fact);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetQuotes();
  },[]);



  return (
    <div className="App-header">
      <h1>{catFact}</h1>
      <button className="buttonclick" onClick={GetQuotes}>Get Quotes</button>
    </div>
  );
}

export default API_fetch_axios;
