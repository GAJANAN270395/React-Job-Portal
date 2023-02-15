
import React from "react";
import {Container, Row, Button} from "reactstrap"
import {NavLink, Link} from "react-router-dom"
import './Header.scss';

const nav_links = [
  {
    path: "/",
    display: "Home"
  },
  {
    path: "/jobs",
    display: "Jobs", 
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Header = ()=>{
  return(
    <header className="header">
   <Container>
     <Row>
      <div className=".nav_wrapper.d-flex align-items center justify-content-between">
        <div className="logo">
          <img src="" alt=""/>
        </div>
      </div>
     </Row>
   </Container>
    </header>
  )
}
export default Header;