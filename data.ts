import {IService} from './type'
import {RiComputerLine} from 'react-icons/ri'
import {FaDatabase} from 'react-icons/fa'
import {BsClipboardData} from 'react-icons/bs'

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
        about: 'lorem bla bla bla'
    },
    {
        Icon: RiComputerLine,
        title:'Data Analysis',
        about:'lorem bla bla bla',
    },
]