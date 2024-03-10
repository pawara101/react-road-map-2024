import React from 'react'
import axios from 'axios'

import { useState, useEffect } from 'react'

function UserDetail() {
    console.log("Start")
    const [userInfo, setuserInfo] = useState("");
    const getInfo = () =>{
        axios.get("https://reqres.in/api/users")
        .then((resp) => {
            
            console.log("data fetching");
            console.log(resp.data.data);
        })
        .catch((err) => {
            console.error(err);
        });
    };

    useEffect(() => {
        getInfo();
    },[])
  return (
    <div>
      
    </div>
  )
}

export default UserDetail
