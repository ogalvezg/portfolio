import { FunctionComponent } from "react"
import { Category } from "../types"

export const NavItem:FunctionComponent<{value:Category | 'All'}> = ({value}) => {
    return (
        <li className='cursor-pointer hover:text-green'>
            {value}
        </li>
    )
};

const ProjectsNavbar = () => {
    return (
        <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
           <NavItem value='All' />
           <NavItem value='Front-end' />
           <NavItem value='React' />
           <NavItem value='Data Analysis' />
           <NavItem value='BI' /> 
        </div>
    )
};

export default ProjectsNavbar
