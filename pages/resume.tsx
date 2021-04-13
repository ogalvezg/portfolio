import { languages, tools } from "../data"
import Bar from "../components/Bar"

const resume = () => {
    return (
        <div className='px-6 py-2'>
            {/* //education & exp */}
            <div className='grid gap-6 md:grid-cols-2'>
                <div>
                    <h5 className='my-3 text-2xl font-bold'>Education</h5>
                    <div>
                        <h5 className='my-2 text-xl font-semibold'>Course in Digital Marketing</h5>
                        <p className='font-semibold'>IAB Europe & Google Garage (2015)</p>
                    </div>
                    <div>
                        <h5 className='my-2 text-xl font-semibold'>MBA & Ecommerce</h5>
                        <p className='font-semibold'>U. Villanueva & U. Complutense, Madrid (2005)</p>
                    </div>
                    <div>
                        <h5 className='my-2 text-xl font-semibold'>BA degree in International Business</h5>
                        <p className='font-semibold'>Colegio Holandes, Mexico City (1996 - 2000)</p>
                    </div>
                </div>
                <div>
                    <h5 className='my-3 text-2xl font-bold'>Experience</h5>
                    <div>
                        <h5 className='my-2 text-xl font-semibold'>Co-Founder and COO</h5>
                        <p className='font-semibold'>LatinMex Global (2016 - Feb 2020)</p>
                        <p className='my-3'>Distributor and marketer of organic products.</p>
                    </div>
                    <div>
                        <h5 className='my-2 text-xl font-semibold'>Accounts Manager</h5>
                        <p className='font-semibold'>Cuervo Promotions (2015 - 2017)</p>
                        <p className='my-3'>organizational mastermind who not only keeps the machine working but running.</p>
                    </div>
                    <div>
                        <h5 className='my-2 text-xl font-semibold'>Customer Support Agent</h5>
                        <p className='font-semibold'>Wimdu GmbH (2014)</p>
                        <p className='my-3'>organizational mastermind who not only keeps the machine working but running.</p>
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
