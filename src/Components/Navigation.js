import React from 'react';
import {Navbar, Button, Container, NavDropdown, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {AiFillGithub, AiOutlineMail} from 'react-icons/ai'
import {BiWorld} from 'react-icons/bi'

export default function Navigation() {
  return <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top" >
  <Container>
  <LinkContainer to="/"><Navbar.Brand href="#home">NYC JOBS 22</Navbar.Brand></LinkContainer>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
<LinkContainer to="/"><Nav.Link to="/">Home</Nav.Link></LinkContainer>
<LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
<LinkContainer to="/centers"><Nav.Link>Job Centers</Nav.Link></LinkContainer>
<LinkContainer to="/jobs"><Nav.Link>Job Listing</Nav.Link></LinkContainer>
  
    </Nav>
    <Nav>
      <Nav.Link href="#deets"><BiWorld className="icon-nav" ></BiWorld></Nav.Link>
      <Nav.Link href="#deets"><AiFillGithub className="icon-nav"></AiFillGithub></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        <AiOutlineMail className="icon-nav"></AiOutlineMail>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>;
}
