
import React from "react";
import {Container, Row, Button,Nav,NavBar, NavDropdown} from "reactstrap"
import {NavLink, Link} from "react-router-dom"
import './Header.scss';
import logo from "../../assets/images/logo.png";

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
          <img src="https://stackblitz.com/files/react-qhxfxm/github/GAJANAN270395/React-Job-Portal/main/src/assets/logo.png" alt=""/>
        </div>
        <div className="navigation">
          <ul className="menu d-flex align-items-center gap-5">
{nav_links.map((item, index)=>{
  <li className="nav__item">
     <NavLink
     to ={item.path} className={(navClass)=>
        navClass.isActive ? "active__link" : ""
    }
     >
       {item.display}
     </NavLink>
  </li>;
})}
          </ul>
        </div>
        <div className="nav__right d-flex align-items-center gap-4">
          <div className="nav__btn">
            <Button className="btn primary__btn">
              <Link to="/login">Login</Link>
            </Button>
            <Button className="btn primary__btn">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>
      </div>
     </Row>
   </Container>
    </header>
  )
}
export default Header;