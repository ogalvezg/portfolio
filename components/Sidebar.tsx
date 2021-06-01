import {AiFillGithub} from 'react-icons/ai'
import {SiTableau} from 'react-icons/si'
import {FiGlobe} from 'react-icons/fi'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import {useTheme} from 'next-themes'
import Image from 'next/image'

const Sidebar = () => {

    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme ==='light' ? 'dark' : 'light')
    }

    return (
        <div>
            <Image
                src="/images/avatar-1.png" 
                alt="user avatar"
                className="mx-auto rounded-full"
                height='128px'
                width='128px'
                layout='intrinsic'
                quality='100'
            />
        
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-green">Omar</span> Galvez
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
            Data Analyst, BI <br /> & Front-End Dev 
            </p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
                <GiTie className="w-6 h-6" /> Download Resume
            </a>
            {/* social icons */}
            <div className="flex justify-around mx-auto my-5 text-green md:w-full">
                <a href="https://cuervo-digital.com/">
                    <FiGlobe className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="https://github.com/ogalvezg">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="https://public.tableau.com/profile/omar.galvez4225#!/">
                    <SiTableau className="w-8 h-8 cursor-pointer" />
                </a>
            </div>

            {/* address */}
            <div 
                className="py-4 m-5 bg-gray-200 dark:bg-dark-200"
                style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Berlin, DE</span>
                </div>
                <p className="my-2">itsomargalvez@gmail.com</p>
                { /*<p className="my-2">Tel: optional</p>*/ }
            </div>
            {/* Email Button */}
            <button 
                className="w-9/12 px-4 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
                onClick={() => window.open('mailto:itsomargalvez@gmail.com')}>
                Email me
            </button>
            <button 
                onClick={changeTheme}
                className="w-9/12 px-4 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
                Toggle UI
            </button>
        </div>
    )
}

export default Sidebar
