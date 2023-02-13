import React from "react";
import {Routes,Route, Navigate} from "react-router-dom"
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SingleJobDetails from "../pages/SingleJobDetails";


const Routers = ()=>{
  return(
   
     <Routes>
       <Route path="/" element={<Navigate to="/home"/>} />
       <Route path="/login" element={<Home/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/login" element={<Register/>} />
       <Route path="/login" element={<SingleJobDetails/>} />
     </Routes>
  
  ) 
}
export default Routers;