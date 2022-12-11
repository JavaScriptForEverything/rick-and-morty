
// import logo from './logo.svg';
import './App.css';

import Home from './components/home'
// import Cast from './components/cast'
// import DetailsPage from './components/details'


// import DeleteMe from './deleteMe'

import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const App = () => {

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
			<Container>

			<Home />
			{/* <Cast /> */}
			{/* <DetailsPage /> */}

			{/* <DeleteMe /> */}
			</Container>
		</Box>
	)
}
export default App
