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
      <Table className="w-full min-w-max table-auto text-left">
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
            <tr>
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

export default UserDetail
