import React, {useEffect, useState} from 'react';
import "../component/style/portfolio.scss";
import {data1} from "../utils/data/portfolioData";
import {NavLink, useSearchParams} from "react-router-dom";
import State from "../utils/vid/state1.mp4";
import Ecom from "../utils/vid/ecomm.mp4";

export default function Portfolio() {
    const [items, setItems] = useState([]);
    const [searchParams] = useSearchParams();

    const vid = [State, Ecom];

    useEffect(() => {
        const params = searchParams.get("index");
        if(!params) return setItems(data1);
        let arr = [];
        arr.push(data1[params])
        setItems(arr)
    }, [searchParams]);

    useEffect(() => {
        const section = document.getElementById("bg");
        console.log(section)
    }, [])
  return (
    <div className='portfolio'>
        {
            items?.map((item, id)=>{
                return(
                    <div className='p_container' key={id}>
                        <section style={{backgroundColor : `${item.bg}`}}>
                            <h1>{item.title}</h1>
                            <p></p>
                        </section>
                         <section>
                            <div >
                                <video  controls>
                                    <source src={vid[id]} type="video/mp4"/>
                                </video>
                            </div>
                            <div>
                                <h2>About</h2>
                                <p>{item.about}</p>
                            </div>

                            <div>
                                <h2>Technologies</h2>
                                <div>
                                    {
                                        item.tech.map((res, id)=> <div key={id}>{res}</div>)
                                    }
                                </div>
                            </div>
                            <div>
                                <h2>Address</h2>
                                {
                                
                                    item.url.map((res, id)=>{
                                        return(
                                            <div key={id}>
                                                <label>{res?.label} : </label>
                                                <NavLink to={res?.link}>{res?.link}</NavLink>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </section>  
                    </div>
                )
            })
        }
       
       
    </div>
  );
}
