const resume = () => {
    return (
        <div className='p-4'>
            {/* //education & exp */}
        <div className='grid md:grid-cols-2 gap'>
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
                    <p className='font-semibold'>LatinMex Global (2016 - 2019)</p>
                    <p className='my-3'>organizational mastermind who not only keeps the machine working but running.</p>
                </div>
                <div>
                    <h5 className='my-2 text-xl font-semibold'>Accounts Manager</h5>
                    <p className='font-semibold'>Exa Express Inc. (2015 - 2017)</p>
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
        </div>
    )
}

export default resume
