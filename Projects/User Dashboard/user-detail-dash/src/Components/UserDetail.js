import React from 'react'
import axios from 'axios'

import { useState, useEffect } from 'react'

//Bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

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
      <table className="user-info-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Profile Image</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>
                <Image src={user.avatar} rounded />
              </td>
              <td className='user_name'>{user.first_name} {user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserDetail
