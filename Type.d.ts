type WrapperProps = {
    pageIndex: number
    children: React.ReactNode
    className? : string
}


type NavLink = {
    path: string;
    label: string;
}

type skills = {
    name: string;
    level: number;
}

type SkillBarProps = {
    skills: skills[]
}
type ProjectProps = {
    id: number;
    img: string;
    name: string;
    tools: string[];
};

type countUpItemsProps = {
    id: number;
    number: number;
    text: string;
};

type ServiceProps = {
    id: number;
    title: string;
    icon:React.ReactNode;
    finished: number;
};

type ContactsProps = {
    id: number;
    title:string;
    text: string;
};

export {SkillBarProps, 
       countUpItemsProps, 
       ProjectProps,
       ServiceProps,
       ContactsProps, 
       NavLink,
       WrapperProps};