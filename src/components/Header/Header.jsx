
import React from "react";
import {Container,  Button} from "react-bootstrap"
import {NavLink,Link} from "react-router-dom"
import './Header.scss';
import logo from "../../assets/images/logo.png";

const navLinks=[
  {
    path:"/jobs",
    display:"Search Job"
  },
  {
  path:"/internship",
  display:"Internship"
  },
  {
    path:"/post-job",
    display: "Post a job"
  }
]

const Header = ()=>{
  return(
      <header className="header">
    <Container>
      <div className="left_menu_section">
       <div className="logo">
         <Link to="/">
           <img src="https://stackblitz.com/files/react-qhxfxm/github/GAJANAN270395/React-Job-Portal/main/src/assets/logo.png" alt="" className="logo_img"/>
         </Link>
       </div>
      </div>
      <div className="right_menu_section">
        <ul className="nav_menu">
           {navLinks.map((item, index)=>(
             <li className="nav_item">
             <NavLink to={item.path} >{item.display}</NavLink>
             </li>
           ))}
          </ul>
      </div>
    </Container>
      </header>
  )
}
export default Header;