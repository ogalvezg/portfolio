import { languages, tools } from "../data"
import Bar from "../components/Bar"

const resume = () => {
    return (
        <div className='px-6 py-2'>
            {/* //education & exp */}
            <div className='grid gap-6 md:grid-cols-2'>
                <div>
                    <h5 className='my-3 text-lg font-bold underline'>Education</h5>
                    <div>
                        <h4 className='text-lg font-semibold'>Web Developer Bootcamp</h4>
                        <p className='mb-4 font-light'>Zero To Mastery Academy (2021)</p>
                    </div>
                    <div>
                        <h4 className='text-lg font-semibold'>Tableau for Business Analytics & Marketing</h4>
                        <p className='mb-4 font-light'>SuperDataScience (2021)</p>
                    </div>
                    <div>
                        <h4 className='text-lg font-semibold'>Course in Digital Marketing</h4>
                        <p className='mb-4 font-light'>IAB Europe & Google Garage (2015)</p>
                    </div>
                    <div>
                        <h5 className='text-lg font-semibold'>MBA & Ecommerce</h5>
                        <p className='mb-4 font-light'>U. Villanueva & U. Complutense, Madrid (2005)</p>
                    </div>
                    <div>
                        <h5 className='text-lg font-semibold'>BA degree in International Business</h5>
                        <p className='mb-4 font-light'>Colegio Holandes, Mexico City (1996 - 2000)</p>
                    </div>
                </div>
                <div>
                    <h5 className='my-3 text-lg font-bold underline'>Experience</h5>
                    <div>
                        <h5 className='text-lg font-semibold'>Co-Founder and COO</h5>
                        <p className='font-semibold'>LatinMex Global (2016 - Feb 2020)</p>
                        <p className='mb-4 font-light'> In charge of overseeing the day-to-day administrative and operational functions as well as the market research analyst.</p>
                    </div>
                    <div>
                        <h5 className='text-lg font-semibold'>SEO Manager</h5>
                        <p className='font-semibold'>Cuervo Promotions (2015 - 2017)</p>
                        <p className='mb-4 font-light'>SEO optimisation of the website (Wordpress), keyword research and analysis, market research and competitive analysis.</p>
                    </div>
                    <div>
                        <h5 className='text-lg font-semibold'>Re-branding Task Force</h5>
                        <p className='font-semibold'>Wimdu GmbH (2014)</p>
                        <p className='mb-4 font-light'>Account management for London, Barcelona & Majorca. Recruit photographers, arrange photoshoots, customer care (Zendesk).</p>
                    </div>
                </div>
            </div>
            {/* Languages & tools */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                    <div className="my-2">
                        {languages.map(Language=> (<Bar data={Language} key={Language.name} />)
                        )}
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                    <div className="my-2">
                        {tools.map(tool=> (<Bar data={tool} key={tool.name} />)
                        )}
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default resume
