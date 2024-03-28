import React from 'react'
import axios from 'axios'

import { useState, useEffect } from 'react'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Badge from "react-bootstrap/Badge";


// React Router
import { BrowserRouter, Route, Routes,useNavigate } from 'react-router-dom'

function UserDetail() {
    // console.log("Start");

    const [userInfo, setuserInfo] = useState([]);

    const getInfo = () =>{
        axios.get("https://reqres.in/api/users")
        .then((resp) => resp.data.data)
        .then((data) => {
          setuserInfo(data);
          // console.log(data);
        })
        .catch((err) => {
            console.error(err);
        });
    };

    const singleUserRow = (userId) =>{
      // console.log(`Clicked in ${userId}`);
      // console.log(`Fetch data from https://reqres.in/api/users/${userId}`);
      axios.get(`https://reqres.in/api/users/${userId}`)
      .then((resp_user) => resp_user.data.data)
      .then((data_user) => {
        console.log(data_user);
      })
    };

    useEffect((data) => {
        getInfo();
    },[])


  return (
    <div>
      <Table striped hover variant="light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((user) => (
            <tr onClick={() => singleUserRow(user.id)}>
              <td>{user.id}</td>
              <td>
                <Image src={user.avatar} className="avatar" roundedCircle />
              </td>
              <td className='user_name'>{user.first_name} {user.last_name}</td>
              <td>{user.email}</td>
              <td><Badge pill bg="success">Active</Badge></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default UserDetail;
