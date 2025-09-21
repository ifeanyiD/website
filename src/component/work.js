import React, { useEffect,  useState } from 'react';
import  {data1} from "../utils/data/portfolioData";
import { createSearchParams,  useNavigate,  } from 'react-router-dom';
import "./style/work.scss";
import { truncateAtWord } from '../utils/helper/truncateWord';

export default function Work() {
    const [tabBox, setTabBox] = useState([]);
    const navigate = useNavigate();

    const modalBox = (x)=>{
        navigate({
            pathname : "portfolio",
            search : createSearchParams({index : x}).toString()
        })
    }

    useEffect(()=> 
        {
            setTabBox(data1);
        }, []);

    useEffect(() => {
        const boxes = document.querySelectorAll("#workBox");
        boxes.forEach(ele=> {
            ele.childNodes.forEach(res=>{
                res.addEventListener("mouseenter", (e)=> {
                    e.target.style.backgroundColor = e.target.dataset.bg
                    if(e.target.nextElementSibling && window.innerWidth > 1025){
                        e.target.classList.add("expand")
                        e.target.nextElementSibling.classList.add("shrink");
                    }
                    else if( e.target.previousElementSibling && window.innerWidth > 1025){
                        e.target.classList.add("expand")
                        e.target.previousElementSibling.classList.add("shrink")

                    }
                    else return
                })
                res.addEventListener("mouseleave", (e)=>{
                    e.target.style.backgroundColor = ""
                    if(e.target.nextElementSibling && window.innerWidth > 1025){
                        e.target.classList.remove("expand");
                        e.target.nextElementSibling.classList.remove("shrink")
                    }
                    else if( e.target.previousElementSibling && window.innerWidth > 1025){
                        e.target.classList.remove("expand");
                        e.target.previousElementSibling.classList.remove("shrink")

                    }
                    else return
                })
            })
        })
    }, [])

  return (
    <div className='rootWork' id='rootWork'>
        <div className='rootWorkBody'>
            <div className='workTitle'>
                <h1>Work</h1>
                <p> 
                    Successfully delivered a wide range of web development projects, demonstrating strong proficiency in both front-end and back-end technologies.
                </p>
            </div>

            <div className='workImgContainer'>

                <div className='workBox' id='workBox'>
                    <div className='tabBox' data-bg ={tabBox[0]?.bg} onClick={()=>modalBox(0)}>
                        <div className='innerTabBox' >
                            <ul className='boxLogo'>
                            { 
                                tabBox[0]?.tech.map((res, id)=> <li key={id}>{res}</li>)
                            }
                            </ul>
                            <p>{tabBox[0] && truncateAtWord(tabBox[0]?.about, 40)}</p>
                        </div>
                        <div className='tab_bg_img' >
                            <span>Open...</span>
                        </div>
                    </div>

                        
                    <div className='tabBox' data-bg ={tabBox[1]?.bg} onClick={()=>modalBox(1)}>
                        <div className='innerTabBox' >
                            <ul className='boxLogo'>
                            { 
                                tabBox[1]?.tech.map((res, id)=> <li key={id}>{res}</li>)
                            }
                            </ul>
                            <p>{tabBox[0] && truncateAtWord(tabBox[1]?.about, 40)}</p>

                        </div>
                        <div className='tab_bg_img'>
                            <span>Open...</span>
                        </div>
                    </div> 
                </div>

                <div className='workBox' id='workBox'>
                    <div className='tabBox' data-bg ={tabBox[2]?.bg} onClick={()=>modalBox(2)}>
                        <div className='innerTabBox'>
                            <ul className='boxLogo'>
                                { 
                                tabBox[2]?.tech.map((res, id)=> <li key={id}>{res}</li>)
                                }
                            </ul>
                            <p>{tabBox[0] && truncateAtWord(tabBox[2]?.about, 40)}</p>

                        </div>
                        <div className='tab_bg_img'>
                            <span>Open...</span>
                        </div>
                    </div>
                    <div className='tabBox' data-bg ={tabBox[3]?.bg} onClick={()=>modalBox(3)}>
                        <div className='innerTabBox' >
                            <ul className='boxLogo'>
                            {   
                                tabBox[3]?.tech.map((res, id)=> <li key={id}>{res}</li>)
                            }
                            </ul>
                            <p>{tabBox[0] && truncateAtWord(tabBox[3]?.about, 40)}</p>

                        </div>
                        <div className='tab_bg_img'>
                            <span>Open...</span>
                        </div>
                    </div>
                </div>

                <div className='workBox' id='workBox'>
                    <div className='tabBox' data-bg ={tabBox[4]?.bg} onClick={()=>modalBox(4)}>
                        <div className='innerTabBox'>
                            <ul className='boxLogo'>
                            { 
                                tabBox[4]?.tech.map((res, id)=> <li key={id}>{res}</li>)
                            }
                            </ul>
                            <p>{tabBox[0] && truncateAtWord(tabBox[4]?.about, 40)}</p>

                        </div>
                        <div className='tab_bg_img'>
                            <span>Open...</span>
                        </div>
                    </div>
                    <div className='tabBox' data-bg ={tabBox[5]?.bg} onClick={()=>modalBox(5)}>
                        <div className='innerTabBox' >
                            <ul className='boxLogo'>
                            {   
                                tabBox[5]?.tech.map((res, id)=> <li key={id}>{res}</li>)
                            }
                            </ul>
                            <p>{tabBox[0] && truncateAtWord(tabBox[5]?.about, 40)}</p>

                        </div>
                        <div className='tab_bg_img'>
                            <span>Open</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}
