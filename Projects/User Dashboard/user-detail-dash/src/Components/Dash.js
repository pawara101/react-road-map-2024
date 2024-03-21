import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Dash() {
  return (
    <Navbar className="Nav_header" bg="dark" data-bs-theme="dark" style={{ width: '100%' }}>
      <Container>
        <Navbar.Brand href="#home" className='dashHead'>Members list</Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search Members"
            aria-label="Search"
            allign="left"
            className='dash_search'
          />
          <Button className="searchmember" variant="outline-success">
            Search
          </Button>
          <Button className="exportcsv" type="submit">Export to csv</Button>
    
        </Form>
      
      </Container>
    </Navbar>
  );
}

export default Dash;
