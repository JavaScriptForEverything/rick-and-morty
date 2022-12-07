import Header from './header'
import Footer from './footer'
import HeroTitle from './heroTitle'

import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import SectionContainer from './home'


const Home = () => {

	return (
		<Box sx={{
			backgroundColor: '#191d29',
			color: 'white',
			backgroundImage: 'url("/media_asset/home_page/background/Background.png")',
			backgroundPosition: 'center',
			backgroundAttachment: 'fixed',
			backgroundRepeat: 'no-repeat',
		}}>
			<CssBaseline />
			<Header />

			<HeroTitle />
			<SectionContainer />


			<Footer />

		</Box>
	)
}
export default Home
