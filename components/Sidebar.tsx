import {AiFillGithub} from 'react-icons/ai'
import {SiTableau} from 'react-icons/si'
import {FiGlobe} from 'react-icons/fi'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'

const Sidebar = () => {
    return (
        <div>
            <img src="" alt="user avatar"
                className="w-32 h-32 mx-auto rounded-full"
            />
        
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-green">Omar</span> Galvez
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
                Front-end, Data Analyst & BI
            </p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full">
                <GiTie className="w-6 h-6" /> Download Resume
            </a>
            {/* social icons */}
            <div className="flex justify-around mx-auto my-5 text-green md:w-full">
                <a href="">
                    <FiGlobe className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <SiTableau className="w-8 h-8 cursor-pointer" />
                </a>
            </div>

            {/* address */}
            <div 
                className="py-4 m-5 bg-gray-200"
                style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Berlin, DE</span>
                </div>
                <p className="my-2">itsomargalvez@gmail.com</p>
                <p className="my-2">Tel: optional</p>
            </div>
            {/* Email Button */}
            <button 
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
                onClick={() => window.open('mailto:itsomargalvez@gmail.com')}>
                Email me
            </button>
            <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
                Togle Theme
            </button>
        </div>
    )
}

export default Sidebar
