// App.tsx or main component file
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserTable from './UserTable';
import UserDetails from './UserDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/user/:userId" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// UserTable.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => setUsers(data.data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} onClick={() => navigate(`/user/${user.id}`)} style={{ cursor: 'pointer' }}>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td><img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

// UserDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface UserDetail {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const UserDetails = () => {
  const { userId } = useParams();
  const [userDetail, setUserDetail] = useState<UserDetail | null>(null);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userId}`)
      .then(response => response.json())
      .then(data => setUserDetail(data.data));
  }, [userId]);

  if (!userDetail) return <div>Loading...</div>;

  return (
    <div>
      <p>ID: {userDetail.id}</p>
      <p>Email: {userDetail.email}</p>
      <p>First Name: {userDetail.first_name}</p>
      <p>Last Name: {userDetail.last_name}</p>
      <img src={userDetail.avatar} alt={`${userDetail.first_name} ${userDetail.last_name}`} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
    </div>
  );
};

export default UserDetails;