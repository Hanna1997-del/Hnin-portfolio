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

const services: ServiceProps[] = [
    { id: 1, title: "UI/UX Design", icon: <BsVectorPen />, finished: 113},
    { id: 2, title: "Web Development", icon: <BsCode />, finished: 209},
    { id: 3, title: "Web Research", icon: <HiMagnifyingGlass />, finished: 369},
    { id: 4, title: "Marketing", icon: <FiBarChart />, finished: 313},
];
const countUpItems: countUpItemsProps[] = [
    
]


export { navLinks};