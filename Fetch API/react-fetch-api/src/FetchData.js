import React from 'react'

function FetchData() {
    console.log('============= Fetching data =================');
    const url = "https://fakestoreapi.com/products";
    fetch(url).then(function (res){
    //   console.log(res.json());
    return res.json()
    }).then(function (data) {
        console.log(data);
    });

    //Simplified version
    fetch(url).then((res) => res.json()).then((data) => console.log(data));

  return (
    <div>
      
    </div>
  )
}

export default FetchData


