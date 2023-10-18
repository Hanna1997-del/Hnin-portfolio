import {
    ContactsProps,
    countUpItemsProps,
    ProjectProps,
    ServiceProps,
    NavLink,
} from "@/Type";
import {BsVectorPen, BsCode} from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiMagnifyingGlass} from "react-icons/hi2";

const navLinks: NavLink[] = [
    {path: "/", label: "Home"},
    {path: "/about", label: "About"},
    {path: "/portfolio", label: "Portfolio"},
    {path: "/contact", label: "Contact"}
];
const skills = [
    {name: "HTML" , level: 80},
    {name: "CSS" , level: 70 },
    {name: "JavaScript" , level: 75},
    {name: "TypeScript" , level: 60},
    {name: "ReactJS" , level: 65},
    {name: "NextJS" , level: 75},
]
const services: ServiceProps[] = [
    { id: 1, title: "UI/UX Design", icon: <BsVectorPen />, finished: 113},
    { id: 2, title: "Web Development", icon: <BsCode />, finished: 209},
    { id: 3, title: "Web Research", icon: <HiMagnifyingGlass />, finished: 369},
    { id: 4, title: "Marketing", icon: <FiBarChart />, finished: 313},
];
const countUpItems: countUpItemsProps[] = [
    
];

const contacts: ContactsProps[] = [
    {id:1, title: "Address" , text: "87 street , MingalarTaungNyunt tsp, Yangon"},
    {id:2 , title: "Phone" , text: "+959-775-975-632"},
    {id:3 , title: "Email" , text: "hninthethmue8@gmail.com"}
]




export { navLinks, skills, contacts};