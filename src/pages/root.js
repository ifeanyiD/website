import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoArrowDownRight } from "react-icons/go"
import "../component/style/root.scss";
import Work from '../component/work';
import Skill from '../component/skill';
import Rcontact from '../component/Rcontact';
import Carton from '../component/animation/person';
// import Work from '../../component/rootWork/work';
// import Rcontact from '../../component/rootContact/rcontact';
// import Skill from '../../component/skill/skill';


  export default function Root() {
  return (
   <div className='root_component'>
      <div className='root'>
          <div className='root_layout'>
            <div className='animated'>
                <Carton/>
            </div>
          </div>
          <aside>
            <h1>Full-stack Developer</h1>
            <h4>I engineer solutions interfaces that mirror the design — down to the last pixel.</h4>
            <p>Crafting seamless user experiences with pixel-perfect interfaces backed by solid full-stack logic.</p>
            <NavLink to={"/contact"} className="btnHireMe"><span>Let's work</span><GoArrowDownRight/></NavLink>
          </aside>
      </div>
      <Work/>
      <Skill/>
      <Rcontact/>
   </div>
  );
}
