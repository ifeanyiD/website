import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { AiOutlineJavaScript } from "react-icons/ai";
import { DiMongodb } from "react-icons/di";

const SIZE = 40;

export const skillData =[
    {
        icon : <AiOutlineJavaScript size={SIZE}/>,
        label : "Javascript",
        color : "teal"
    },
    {
        icon : <FaReact size={SIZE}/>,
        label : "Reactjs",
        color: "#0099DC"
    },
    {
        icon : <FaNodeJs size={SIZE}/>,
        label : "Nodejs",
        color : "#80BA4B"
    },
    {
        icon : <FaHtml5 size={SIZE}/>,
        label : "Html",
        color : "#7B6E66"
    },
    {
        icon : <FaCss3Alt size={SIZE}/>,
        label : "Css",
        color : "blue"
    },
    {
        icon : <FaSass size={SIZE}/>,
        label : "Sass",
        color : "blue"
    },
    {
        icon : <BiLogoTypescript size={SIZE}/>,
        label : "TypeScript",
        color : "purple"
    },
    {
        icon : <DiMongodb size={SIZE}/>,
        label : "Mongodb",
        color : "greenyellow"
    }
]