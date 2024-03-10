import React from 'react'
import axios from 'axios'

import { useState, useEffect } from 'react'

function UserDetail() {
    console.log("Start");

    const [userInfo, setuserInfo] = useState([]);

    const getInfo = () =>{
        axios.get("https://reqres.in/api/users")
        .then((resp) => resp.data.data)
        .then((data) => {
          setuserInfo(data);
          console.log(data);
        })
        .catch((err) => {
            console.error(err);
        });
    };

    useEffect((data) => {
        getInfo();
    },[])
  return (
    <div>
      <ul>
        {userInfo.map((user)=> (
          <li key={user.id}>{user.first_name}
          <span> {user.last_name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserDetail
