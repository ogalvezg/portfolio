import {IService, ISkill} from './type'
import {RiComputerLine} from 'react-icons/ri'
import {FaDatabase} from 'react-icons/fa'
import {BsCircleFill, BsClipboardData} from 'react-icons/bs'

export const services:IService[] = [
    {
        Icon: RiComputerLine,
        title: 'Frontend Development',
        about: 'I can build beautiful and scalable SPA using <b> HTML</b>, <b>CSS</b> and <b>React.js</b>'
    },
    {
        Icon: FaDatabase,
        title: 'Data Analysis',
        about: 'lorem bla bla bla',
    },
    {
        Icon: BsClipboardData,
        title: 'Business Intelligence',
        about: 'Analysis of Data to get the best out of your business and helping to improve the results'
    },
    {
        Icon: RiComputerLine,
        title:'Data Analysis',
        about:'lorem bla bla bla',
    },
    {
        Icon: RiComputerLine,
        title: 'Frontend Development',
        about: 'I can build beautiful and scalable SPA using <b> HTML</b>, <b>CSS</b> and <b>React.js</b>'
    },
    {
        Icon: BsClipboardData,
        title: 'Business Intelligence',
        about: 'Analysis of Data to get the best out of your business and helping to improve the results'
    },
]

export const languages: ISkill[] = [
    {
        name: 'HTML',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'CSS',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Java Script',
        level: '50%',
        Icon: BsCircleFill
    },
    {
        name: 'Python',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'React',
        level: '50%',
        Icon: BsCircleFill
    },
    {
        name: 'SQL',
        level: '80%',
        Icon: BsCircleFill
    },
]

export const tools: ISkill[] = [
    {
        name: 'VS Code',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'GitHub',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'MySQL',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'Tableau',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Anaconda',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'Figma',
        level: '80%',
        Icon: BsCircleFill
    },
   
    {
        name: 'PostgreSQL',
        level: '50%',
        Icon: BsCircleFill
    },
    {
        name: 'Figma',
        level: '80%',
        Icon: BsCircleFill
    },
]
