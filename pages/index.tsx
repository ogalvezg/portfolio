import { GetServerSideProps } from 'next';
import {services} from '../data'

const index = ({services}) => {
	console.log(services);
  
  	return (
    	<div>
      
    	</div>
  	)
}

export default index

export const getServerSideProps = async (context:GetServerSidePropsContext)=> {
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
