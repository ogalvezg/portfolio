import {IProject, IService, ISkill} from './types'
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
    {
        name: 'Bootstrap',
        level: '70%',
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
        name: 'Scrum',
        level: '80%',
        Icon: BsCircleFill
    },
]
export const projects:IProject[] = [
    {
        name:'Omnifood-Muckup',
        description:' This  is a landing page for a food delivery service',
        image_path:'/images/omnifood-muckup.png',
        deployed_url:'https://ogalvezg.github.io/omnifood-muckup/',
        github_url:'https://github.com/ogalvezg/omnifood-muckup',
        category: ['Front-end'],
        key_techs: ['HTML', 'CSS', 'JS', 'Jquery'],
    },
    {
        name:'Iban Maya Tattoo',
        description:'Website creating using CSS Grid and Flexbox',
        image_path:'/images/iban-maya.png',
        deployed_url:'https://ibantattoo.com/',
        github_url:'https://github.com/ogalvezg/IbanTattoo',
        category: ['Front-end'],
        key_techs: ['HTML', 'CSS', 'JS'],
    },
    {
        name:'Natours',
        description:'Website creating using Sass',
        image_path:'/images/natours.png',
        deployed_url:'https://ogalvezg.github.io/Natours/#',
        github_url:'https://github.com/ogalvezg/Natours',
        category: ['Front-end'],
        key_techs: ['HTML', 'Sass'],
    },
    {
        name:'Startup Expansion Analytics',
        description:'Interactive dashboard created using cross-database joins and Regression Modeling with Clustering.',
        image_path:'/images/startup-expansion.png',
        deployed_url:'https://public.tableau.com/profile/omar.galvez4225#!/vizhome/StartupExpansionAnalytics_16135643049120/Dashboard1',
        github_url:'https://github.com/ogalvezg/omnifood-muckup',
        category: ['BI'],
        key_techs: ['Tableau', 'MySQL', 'Google Sheets'],
    },
    {
        name:'Ticker Data App',
        description:'Stock Price App for the S&P 500 Index. Created with Python using Streamlit, Pandas, Yahoo Finance and Cufflinks libraries.',
        image_path:'/images/ticker-data.png',
        deployed_url:'https://share.streamlit.io/ogalvezg/ticker-data/main/app.py',
        github_url:'https://github.com/ogalvezg/ticker-data',
        category: ['Data Analysis'],
        key_techs: ['Python', 'Google Sheets'],
    },
    {
        name:'Cryptocurrency Tracker',
        description:' Crypto Tracker App made with React using Next.js and CSS Flexbox',
        image_path:'/images/crypto-tracker.png',
        deployed_url:'https://crypto-tracker-gray-one.vercel.app/',
        github_url:'https://github.com/ogalvezg/crypto-tracker',
        category: ['Data Analysis'],
        key_techs: ['React', 'Next.js']
    },
    {
        name:'Survey App',
        description:'Simple Survey App created with Python using Flask, PostgreSQL and Mailtrap',
        image_path:'/images/review-app.png',
        deployed_url:'https://mbr-app.herokuapp.com/',
        github_url:'https://github.com/ogalvezg/review-app',
        category: ['Data Analysis'],
        key_techs: ['Python', 'Flask', 'PostgreSQL'],
    },
    {
        name:'Nexter Real Estate App',
        description:'Mockup webpage of a Real Estate Company created with CSS Grid',
        image_path:'/images/nexter-web.png',
        deployed_url:'https://ogalvezg.github.io/nexter-web/',
        github_url:'https://github.com/ogalvezg/nexter-web/tree/master',
        category: ['Front-end'],
        key_techs: ['Sass', 'CSS Grid'],
    },
    {
        name:'NHL Records App',
        description:'Multipage App created with Python, using Streamlit, Pandas and Matplotlib libraries.',
        image_path:'/images/nhl-app.png',
        deployed_url:'https://share.streamlit.io/ogalvezg/records-nhl/main/main.py',
        github_url:'https://github.com/ogalvezg/records-nhl',
        category: ['Data Analysis'],
        key_techs: ['CSS Grid', 'Sass'],
    },
    {
        name:'Survey App',
        description:'Simple Survey App created with Python using Flask, PostgreSQL and Mailtrap',
        image_path:'/images/review-app.png',
        deployed_url:'https://mbr-app.herokuapp.com/',
        github_url:'https://github.com/ogalvezg/review-app',
        category: ['Data Analysis'],
        key_techs: ['Python', 'Flask', 'PostgreSQL'],
    },
    {
        name:'Nexter Real Estate Webrider202',
        description:'Mockup webpage of a Real Estate Company created with CSS Grid',
        image_path:'/images/nexter-web.png',
        deployed_url:'https://ogalvezg.github.io/nexter-web/',
        github_url:'https://github.com/ogalvezg/nexter-web/tree/master',
        category: ['Front-end'],
        key_techs: ['Sass', 'CSS Grid'],
    },
    {
        name:'NHL Records App',
        description:'Multipage App created with Python, using Streamlit, Pandas and Matplotlib libraries.',
        image_path:'/images/nhl-app.png',
        deployed_url:'https://share.streamlit.io/ogalvezg/records-nhl/main/main.py',
        github_url:'https://github.com/ogalvezg/records-nhl',
        category: ['Data Analysis'],
        key_techs: ['CSS Grid', 'Sass'],
    },
]
