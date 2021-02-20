//import { GetServerSideProps } from 'next';
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

const index = () => {
  
  	return (
    	<div className='flex flex-col flex-grow px-6 pt-1'>
			<h5 className='my-3 font-medium'>
				I'm actually studing Python for Data Science and Machine Lerning.
				I have 3+ years of experience processing and managing data using SQL.
				I'm as well a junior frontend developer.
			</h5>
			<div className='p-4 mt-5 bg-gray-400' style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
				<h6 className='my-3 text-xl font-bold tracking-wide'>My Skills</h6>
				<div className='grid gap-6 lg:grid-cols-2'>
					{
						services.map(service=> (
							<div className='bg-gray-200 rounded-lg lg:col-span-1'>
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

/*export const getServerSideProps = async (context:GetServerSideProps)=> {
	//calculation
	const res = await fetch('http://localhost:3000/api/services')
	const data = await res.json()

	console.log('SERVER', services)

	return {
		props:{
			services: data.services,
		},
	}
}
*/