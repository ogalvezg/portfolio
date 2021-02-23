import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute='class'>
			<div className="grid grid-cols-12 gap-6 px-5 my-14 sm:px-16 md:px-20 lg:px-24 xl:px-40">
				<div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
					<Sidebar />
				</div>
				<div className="flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
					<Navbar />
					<Component {...pageProps} />
				</div>
			</div>
		</ThemeProvider>
		
	);		
}

export default MyApp
