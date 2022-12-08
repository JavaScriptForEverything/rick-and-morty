import { useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import InputAdornment from '@mui/material/InputAdornment'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'

const buttonBackgroundColor = {
	color: 'white',
	backgroundColor: '#15ddeadd',
	'&: hover': {
		backgroundColor: '#15ddea',
	}
}
const searchContainer = {
	display: 'flex',
}
const searchButtonStyles = {
	borderRadius: 0,
	borderTopLeftRadius: '20px 20px',
	borderBottomLeftRadius: '20px 20px',

	textTransform: 'capitalize',
	...buttonBackgroundColor
}
const inputStyles = {
	backgroundColor: '#2d313d',
	color: '#cccccc',
	border: '1px solid #7d8b56',
	borderTopRightRadius: '20px 20px',
	borderBottomRightRadius: '20px 20px',
	width: 200
}
const menuStyles = {
	...buttonBackgroundColor,
	marginTop: 8,
}

const HeroTitle = () => {
	const [ open, setOpen ] = useState(false)
	const [ anchorEl, setAnchorEl ] = useState<HTMLElement | null>(null)


	const closeHandler = () => {
		setOpen(false)		
		setAnchorEl(null)
	}
	const searchButtonClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(evt.currentTarget)
		setOpen(true)
	}
	const menuItemClickHandler = (item: string) => () => {
		closeHandler()
		console.log({ item })
	}

	return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'flex-start'
		}}>
			<Typography variant='h4' sx={{ 
				color: '#15ddea',
				fontWeight: 'bold'
			}}>The Cast</Typography>

			<Box sx={searchContainer}>
				<Button
					variant='contained'
					endIcon={<KeyboardArrowDownIcon />}
					disableElevation
					sx={searchButtonStyles}
					onClick={searchButtonClick}
				>Location</Button>
				<InputBase 
					sx={inputStyles}
					placeholder='Search'
					startAdornment={
					<InputAdornment position='start'>
						<SearchIcon sx={{ 
							color: '#bbbbbb',
							ml: 1
						}} />
					</InputAdornment>
					}
				/>
			</Box>

			<Menu
				open={open}
				anchorEl={anchorEl}
				onClose={closeHandler}
				PaperProps={{
					style: menuStyles,
				}}
			>
				{['characters', 'location', 'episodes'].map((item, index, arr) => (
					<MenuItem key={item} 
						divider={index !== arr.length - 1}
						onClick={menuItemClickHandler(item)}
					>
						<Typography>Characters</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	)
}
export default HeroTitle
