import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import EastIcon from '@mui/icons-material/EastRounded'
import WestIcon from '@mui/icons-material/WestRounded'

const activeIconStyle = {
	border: '1px solid #191d29',
	borderRadius: '50%',
	p: .2,
	backgroundColor: '#15ddea',
	color: '#191d29',
	fontSize: 16,
	cursor: 'pointer'
}

const inActiveIconStyle = {
	...activeIconStyle,
	backgroundColor: 'transparent',
	border: '1px solid grey',
	color: 'grey',
}
const buttonContainerStyle = {
	background: 'linear-gradient(125deg, #15ddea88, #9dfe0088)',
	p: 0.1,
	borderRadius: 20,
}
const buttonStyle = {
	borderRadius: 20,
	color: '#15ddea',
	background: '#191d29',
	'&:hover' : {
		background: '#191d29ee',
	}
}

const Pagination = () => {

	const prevClickHandler = () => {
		console.log('prev')
	}
	const nextClickHandler = () => {
		console.log('next')
	}

	return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			gap: 2,
			mb: 4
		}}>
			<Typography>Page</Typography>			
			<WestIcon onClick={prevClickHandler} sx={ 0 ? activeIconStyle : inActiveIconStyle} />
			<Box sx={buttonContainerStyle}>
				<Button variant='outlined' sx={buttonStyle}>1</Button>
			</Box>
			<EastIcon onClick={nextClickHandler} sx={activeIconStyle} />
			<Typography>of 42</Typography>			
		</Box>
	)
}
export default Pagination
