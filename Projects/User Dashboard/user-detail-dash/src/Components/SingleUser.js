import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// Bootstrap styles
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

//
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function SingleUserDetail() {
  const { userId } = useParams();
  const [singleuserDetail, setsingleUserDetail] = useState(null);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setsingleUserDetail(data.data));
  }, [userId]);

  if (!singleuserDetail) return <div>Loading...</div>;

  return (
    <div>
      <img
        src={singleuserDetail.avatar}
        alt={`${singleuserDetail.first_name} ${singleuserDetail.last_name}`}
        className="single-user-img"
      ></img>
      <h1 className="user-details-single">
        {singleuserDetail.first_name} {singleuserDetail.last_name}
      </h1>{" "}
      <h3>
      <span class="badge text-bg-success">Active</span>
      </h3>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          Curious soul with an insatiable appetite for adventure. With a shock
          of unruly curls framing a mischievous grin,{" "}
          {singleuserDetail.first_name}'s bright eyes hold a glimmer of
          excitement for the unknown. Their wardrobe is a patchwork of eclectic
          styles, reflecting a personality that refuses to be confined by
          convention. Whether they're lost in the pages of a well-loved book or
          exploring the hidden corners of their city,{" "}
          {singleuserDetail.first_name}'s thirst for discovery is unquenchable.
          A natural storyteller, they weave tales from the mundane and find
          magic in the everyday. With a heart as expansive as their imagination,{" "}
          {singleuserDetail.first_name}'s magnetic energy draws others into
          their orbit, leaving a trail of laughter and wonder in their wake.
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Button variant="dark">Past Activities</Button>
          <br></br>
          <br></br>
          <Button variant="dark">Projects</Button>
          <br></br>
          <br></br>
          <Button variant="dark">Achievements</Button>
        </Tab>
        <Tab eventKey="contact" title="Contact" className="contact-single-user">
          E-mail : {singleuserDetail.email}
          <br></br>
          Mobile Number : 78889656232
          <br></br>
          <>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
          
          </>
        </Tab>
      </Tabs>
    </div>
  );
}

export default SingleUserDetail;
