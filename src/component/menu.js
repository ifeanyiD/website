import React from 'react';
import { FaFacebookF,  FaLinkedinIn } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import "./style/menu.scss";

    const active = ({isActive, isPending})=> isPending ? "pending" : isActive ? "active" : "" 
export default function Menu({setMenu}) {
    
  return (
    <div className='menuComponent'>
        <div>
            <NavLink to={"https://www.linkedin.com/in/ifeanyi-david-273b9a21a/"} target='_'><FaLinkedinIn/></NavLink>
            <NavLink to={"https://www.facebook.com/profile.php?id=61579267942845"}><FaFacebookF/></NavLink>
            <span onClick={()=>setMenu(false)} className='closeMenu'><RxCross1 size={"25px"} /></span>
        </div>
        <div>
            <ul>
                <li onClick={()=>setMenu(false)}><NavLink to={"/"} className={active}>Home</NavLink></li>
                <li onClick={()=>setMenu(false)}><NavLink to={"/about-me"} className={active}>About</NavLink></li>
                <li onClick={()=>setMenu(false)}><NavLink to={"/portfolio"} className={active}>Portfolio</NavLink></li>
                <li onClick={()=>setMenu(false)}><NavLink to={"/contact"} className={active}>Contact</NavLink></li>
            </ul>
        </div>
        <div>
            <span>Resume</span>
            <span className='copy'>&copy; 2025</span>
        </div>        
    </div>
  );
}
