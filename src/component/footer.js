import React from 'react';
import "./style/footer.scss";
import { NavLink } from 'react-router-dom';

const active = ({isActive, isPending})=>{
   return  isPending ? "" : isActive ? "active" : ""
}
export default function Footer() {
    
  return (
    <div className='footer'>
        <p>&copy;2025 <i> David</i></p>
        <div className='footer_links'>
            <NavLink className={active} to={"/"}>Home</NavLink>
            <NavLink className={active} to={"#"}>About</NavLink>
            <NavLink className={active} to={"portfolio"}>Portfolio</NavLink>
            <NavLink className={active} to={"/contact"}>Contact</NavLink>
        </div>
    </div>
  );
}
