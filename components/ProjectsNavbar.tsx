import { FunctionComponent } from "react"
import { Category } from "../types"

export const NavItem: FunctionComponent<{
    value: Category | 'All'; 
    handlerFilterCategory: Function;
    active:string
}> = ({value, handlerFilterCategory, active}) => {

    let className = 'cursor-pointer hover:text-green'
    if(active === value)
        className += ' text-green'

    return (
        <li className={className} 
            onClick={() => handlerFilterCategory(value)}>
            {value}
        </li>
    );
};

const ProjectsNavbar: FunctionComponent<{handlerFilterCategory:Function,active:string}> = (props) => {
    return (
        <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
           <NavItem value='All' {...props} />
           <NavItem value='Front-End' {...props} />
           <NavItem value='React' {...props} />
           <NavItem value='Data Analysis' {...props} />
           <NavItem value='BI' {...props} /> 
        </div>
    )
};

export default ProjectsNavbar
