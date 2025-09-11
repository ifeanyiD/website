import React from 'react';
import "../component/style/skill.scss";
import { skillData } from '../utils/data/skillData';

export default function Skill() {
  return (
    <div className='skill'>
        
        <div className='skillContainer'>
            <div className='skillp'>
                <p>My skills</p>
            </div>
            <div className='innerBox'>
                {
                    skillData.map((res, id)=>{
                        return(
                            <div key={id} className='skillBox' style={{color: res.color}}>
                                <div>
                                    {res.icon}
                                    <label>{res.label}</label>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  );
}
