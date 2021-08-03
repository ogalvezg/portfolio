import {IProject, IService, ISkill} from './types'
import {RiComputerLine} from 'react-icons/ri'
import {FaDatabase} from 'react-icons/fa'
import {BsCircleFill, BsClipboardData} from 'react-icons/bs'
import {FcSmartphoneTablet, FcComboChart} from 'react-icons/fc'
import {GiHistogram} from 'react-icons/gi'

export const services:IService[] = [
    {
        Icon: FaDatabase,
        title: 'Database Design & DBA ',
        about: 'Data modeling, database creation and maintenance. Optimizing tables and schemas for better performance and scalability.',
    },
    {
        Icon: FcComboChart,
        title:'Data Analysis',
        about:'Analysis of datasets in order to influence business decisions, improve results and increase team success.',
    },
    {
        Icon: GiHistogram,
        title: 'Business Intelligence',
        about: 'Ad hoc reporting, creating autonomous reports using real-time data to support business decision-making.'
    },
    {
        Icon: RiComputerLine,
        title: 'Front-End Developer',
        about: 'Creating websites, mobile applications and landing pages from concept and planning to implementation, deployment and maintenance.'
    },
    {
        Icon: FcSmartphoneTablet,
        title: 'Web Designer',
        about: 'Designing user-friendly websites with a focus on mobile responsiveness and best practices in UI and code structure.'
    },
    {
        Icon: BsClipboardData,
        title: 'SEO Optimization',
        about: 'Improving the performance of websites for search engines and identifying potential issues to increase traffic and conversion rates.'
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
        level: '50%',
        Icon: BsCircleFill
    },
    {
        name: 'React',
        level: '40%',
        Icon: BsCircleFill
    },
    {
        name: 'SQL',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Bootstrap',
        level: '75%',
        Icon: BsCircleFill
    },
]

export const tools: ISkill[] = [
    {
        name: 'MySQL',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Tableau',
        level: '65%',
        Icon: BsCircleFill
    },
    {
        name: 'Amazon RDS',
        level: '50%',
        Icon: BsCircleFill
    },
    {
        name: 'Anaconda',
        level: '50%',
        Icon: BsCircleFill
    },
    {
        name: 'SAP Analytics Cloud',
        level: '50%',
        Icon: BsCircleFill
    },
   
    {
        name: 'PostgreSQL',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'BigQuery',
        level: '60%',
        Icon: BsCircleFill
    },
]
export const projects:IProject[] = [
    {
        id:1,
        name:'Omnifood-Muckup',
        description:'Landing page for a food delivery service',
        image_path:'/images/omnifood-muckup.png',
        deployed_url:'https://ogalvezg.github.io/omnifood-muckup/',
        github_url:'https://github.com/ogalvezg/omnifood-muckup',
        category: ['Front-End'],
        key_techs: ['HTML', 'CSS', 'JS', 'Jquery'],
    },
    {
        id:2,
        name:'Iban Maya Tattoo',
        description:'Website creating using CSS Grid and Flexbox',
        image_path:'/images/iban-maya.png',
        deployed_url:'https://ibantattoo.com/',
        github_url:'https://github.com/ogalvezg/IbanTattoo',
        category: ['Front-End'],
        key_techs: ['HTML', 'Flexbox', 'CSS Grid', 'JS'],
    },
    {
        id:3,
        name:'Real Estate Landing Page',
        description:'Nexter-Mockup webpage of a Real Estate Company created with CSS Grid',
        image_path:'/images/nexter-web.png',
        deployed_url:'https://ogalvezg.github.io/nexter-web/',
        github_url:'https://github.com/ogalvezg/nexter-web/tree/master',
        category: ['Front-End'],
        key_techs: ['Sass', 'CSS Grid'],
    },
    {
        id:4,
        name:'Startup Expansion Analytics',
        description:'Interactive dashboard created using cross-database joins and Regression Modeling with Clustering.',
        image_path:'/images/startup-expansion.png',
        deployed_url:'https://public.tableau.com/profile/omar.galvez4225#!/vizhome/StartupExpansionAnalytics_16135643049120/Dashboard1',
        github_url:'https://public.tableau.com/profile/omar.galvez4225#!/vizhome/StartupExpansionAnalytics_16135643049120/Dashboard1',
        category: ['BI'],
        key_techs: ['Tableau', 'MySQL', 'Google Sheets'],
    },
    {
        id:5,
        name:'Ticker Data App',
        description:'Stock Price App for the S&P 500 Index. Created with Python using Streamlit, Pandas, Yahoo Finance and Cufflinks libraries.',
        image_path:'/images/ticker-data.png',
        deployed_url:'https://share.streamlit.io/ogalvezg/ticker-data/main/app.py',
        github_url:'https://github.com/ogalvezg/ticker-data',
        category: ['Data Analysis'],
        key_techs: ['Python', 'Google Sheets'],
    },
    {
        id:6,
        name:'Cryptocurrency Tracker',
        description:' Crypto Tracker App made with React using Next.js and CoinGecko API. Just for tablets and desktop version.',
        image_path:'/images/crypto-tracker.png',
        deployed_url:'https://crypto-tracker-gray-one.vercel.app/',
        github_url:'https://github.com/ogalvezg/crypto-tracker',
        category: ['React'],
        key_techs: ['React', 'Next.js']
    },
    {
        id:7,
        name:'Survey App',
        description:'Simple Survey App created with Python using Flask, PostgreSQL and Mailtrap',
        image_path:'/images/review-app.png',
        deployed_url:'https://mbr-app.herokuapp.com/',
        github_url:'https://github.com/ogalvezg/review-app',
        category: ['Data Analysis'],
        key_techs: ['Python', 'Flask', 'PostgreSQL'],
    },
    {
        id:8,
        name:'Company Salary Report',
        description:'Dashbord Report created on Tableau and MySQL',
        image_path:'/images/salary-report.png',
        deployed_url:'https://ogalvezg.github.io/report-salaries/',
        github_url:'https://github.com/ogalvezg/report-salaries',
        category: ['Data Analysis'],
        key_techs: ['Tableau', 'MySQL'],
    },
    {
        id:9,
        name:'NHL Records App',
        description:'Multipage App created with Python, using Streamlit, Pandas and Matplotlib libraries.',
        image_path:'/images/nhl-app.png',
        deployed_url:'https://share.streamlit.io/ogalvezg/records-nhl/main/main.py',
        github_url:'https://github.com/ogalvezg/records-nhl',
        category: ['Data Analysis'],
        key_techs: ['Python', 'Pandas', 'Streamlit', 'Matplotlib'],
    },
    {
        id:10,
        name:'Bank Data Segmentation',
        description:'A Business Analysis using a Storyline created with a serie of dashboards reporting',
        image_path:'/images/bank-report.png',
        deployed_url:'https://public.tableau.com/views/BankData_16112220858190/Story1?:language=en&:display_count=y&:origin=viz_share_link',
        github_url:'https://public.tableau.com/views/BankData_16112220858190/Story1?:language=en&:display_count=y&:origin=viz_share_link',
        category: ['BI'],
        key_techs: ['Tableau', 'SQL'],
    },
    {
        id:11,
        name:'Natours',
        description:'Website creating using Sass',
        image_path:'/images/natours.png',
        deployed_url:'https://ogalvezg.github.io/Natours/#',
        github_url:'https://github.com/ogalvezg/Natours',
        category: ['Front-End'],
        key_techs: ['HTML', 'Sass'],
    },
    {
        id:12,
        name:'My Portfolio',
        description:'Portafolio Website created with React, Next.js and Tailwind CSS.',
        image_path:'/images/portfolio.png',
        deployed_url:'https://myportfolio-gray.vercel.app/projects',
        github_url:'https://github.com/ogalvezg/portfolio',
        category: ['React'],
        key_techs: ['Next.js', 'Tailwind'],
    },
    {
    id:13,
        name:'Sales Overview',
        description:'Dashboard report. Created with SAP Analytics Cloud and Google Sheets, exported as a PDF file.',
        image_path:'/images/sap-acme.png',
        deployed_url:'https://github.com/ogalvezg/sap-acme/blob/main/Management-Dashboard.pdf',
        github_url:'https://github.com/ogalvezg/sap-acme',
        category: ['Data Analysis'],
        key_techs: ['SAP Analytics Cloud', 'Google Sheets'],
    },
];
