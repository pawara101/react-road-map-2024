import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function SingleUserDetail() {
  const { userId } = useParams();
  const [singleuserDetail, setsingleUserDetail] = useState(null);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userId}`)
      .then(response => response.json())
      .then(data => setsingleUserDetail(data.data));
  }, [userId]);

  if (!singleuserDetail) return <div>Loading...</div>;

  return (
    <div>
      <p>ID : {singleuserDetail.id}</p>
      <p>Email : {singleuserDetail.email}</p>
      <p>First Name : {singleuserDetail.first_name}</p>
      <p>Last Name : {singleuserDetail.last_name}</p>
      <img src={singleuserDetail.avatar} alt={`${singleuserDetail.first_name} ${singleuserDetail.last_name}`}  style={{ width: '100px', height: '100px', borderRadius: '50%' }}></img>
    </div>
  )
}

export default SingleUserDetail;
