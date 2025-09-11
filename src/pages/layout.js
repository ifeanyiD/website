import React, { useEffect, useState } from 'react';
import {createPortal} from "react-dom"
import { Outlet, NavLink } from 'react-router-dom';
import "../component/style/layout.scss";
import Menu from '../component/menu';
import Footer from '../component/footer';

const active = ({isActive, isPending})=> isPending?"pending":isActive?"active":""


export default function Layout() {
    const [openMenu, setopenMenu] = useState(false);
    
    useEffect(() => {
        const header = document.getElementById("header");
        const menu = document.getElementById("menu");
        const scrollMonitor = window.addEventListener("scroll", ()=>{
            if(window.scrollY >= 160 ) {
               header.classList.add("moveTop");
               menu.classList.add("moveTop1")
            }
            else {
              header.classList.remove("moveTop");
              menu.classList.remove("moveTop1");
            }
        })
        return ()=>{
            window.removeEventListener("scroll", scrollMonitor)
        }
    }, [])
      
    const toggleMenu = (state)=>{setopenMenu(state)}

  return (
    <div className='layout'>
        <div className='header'>
            <nav className='nav'>
                <NavLink to={"/"} className={active}>Home</NavLink>
                <NavLink to={"/contact"} className={active}>Contact</NavLink>
            </nav>
            <label id='header' className='name'>David</label>
            <div className='menu' id="menu" onClick={()=>setopenMenu(true)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {createPortal(
                <div className={openMenu ? 'menuItems' : 'hideMenu'}>
                    <Menu setMenu={toggleMenu} openMenu={openMenu}/>
                </div>,
                document.body
                )
            }
        </div>
        <div>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  );
}
