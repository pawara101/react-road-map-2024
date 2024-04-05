import React from 'react';
import { useParams } from "react-router-dom";


function SingleUser() {
  const { userId } = useParams();
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default SingleUser
