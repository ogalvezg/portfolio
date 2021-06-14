//import { GetServerSideProps } from 'next';
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

const index = () => {
  
  	return (
    	<div className='flex flex-col flex-grow px-6 pt-1'>
			<h5 className='my-3 font-medium'>
			I’m open to job opportunities to join a motivated team as a data analyst. 
			Throughout my earlier career, I held several positions that required data processing and analysis. 
			After being made redundant at the beginning of the pandemic in 2020, I decided to reaffirm my passion for data analysis and took the opportunity to upskill and refresh my knowledge.
			<br />
			During the past year, I’ve taken various online courses including Python for data science, machine learning, advanced SQL and data visualization with Tableau. 
			I’m also a self-taught front-end developer and I’m working on various website projects in my spare time.
			</h5>
			<div className='p-4 mt-5 bg-gray-400 dark:bg-dark-100' style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
				<h6 className='my-3 text-xl font-bold tracking-wide'>My Skills</h6>
				<div className='grid gap-6 lg:grid-cols-2'>
					{
						services.map(service=> (
							<div className='bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1'>
								<ServiceCard service={service} />
							</div>
						))
					}
				</div>
			</div>
    	</div>
  	)
}

export default index
