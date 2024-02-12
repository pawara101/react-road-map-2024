import React from "react";
import axios from "axios";

function API_fetch_axios() {
  const GetQuotes = () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((resp) => {
        console.log(resp.data.fact); // Set state with fact
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <div>
      <button onClick={GetQuotes}>Get Quotes</button>
    </div>
  );
}

export default API_fetch_axios;
