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

// Pages
import SingleUser from "./SingleUser"

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
      axios.get(`https://reqres.in/api/users/${userId}`)
      .then((resp_user) => resp_user.data.data)
      .then((data_user) => {
        console.log(data_user);
      })


      return(
        <Redirect
        to={{
          pathname:""
        }}
        />
      )
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
            <th>PROFILE IMAGE</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((user) => (
            <tr key={user.id} onClick={() => singleUserRow(user.id)}>
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
