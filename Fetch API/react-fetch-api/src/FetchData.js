import React from "react";
import { useState, useEffect } from "react";
function FetchData() {
  console.log("============= Fetching data =================");
  const url = "https://fakestoreapi.com/products";
  const [data, GetData] = useState([]);

//   fetch(url)
//     .then(function (res) {
//       //   console.log(res.json());
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });

  // //Simplified version
  // fetch(url).then((res) => res.json()).then((data) => console.log(data));

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data");
        GetData(data);
      });
  },[]);

  console.log("============ Fetch Completed =============");
  return (
    <div>
      <ul id="list">
        {data.map((item) =>
            (<li>{item.title} </li>)
        )}
      </ul>
    </div>
  );
}

export default FetchData;
