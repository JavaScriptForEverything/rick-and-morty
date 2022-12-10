import { SxProps } from '@mui/material'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

type Props = {
	children?: React.ReactNode,
	sx?: SxProps
}
const ScrollWrapper = ({ children, sx={} }: Props) => {
	// const items = [ ...new Array(12) ]

	return (
		<Box sx={sx}>
			<Box sx={{
				// border: '1px solid red',
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				overflowX: 'auto',

				// position: 'relative' 		
			}}>

			<Box sx={{
				// border: '1px solid red',
				flexShrink: 0,
				alignSelf: 'self-start', 		// ot override parent's alignItems
				// marginRight: 'auto' 			// to override parent's justifyContent
			}}>
				{children}
			</Box>

			<Box sx={{
				position: 'absolute',
				left: 0,
				right: 0,

				color: 'green',
				display: 'flex',
				justifyContent: 'space-between',
			}}>
			
				<IconButton color='inherit' sx={iconButtonStyle}>
					<KeyboardArrowLeftIcon />
				</IconButton>

				<IconButton color='inherit' sx={{
					...iconButtonStyle,
					ml: 'auto'
				}}>
					<KeyboardArrowRightIcon />
				</IconButton>

			</Box>
			</Box>
		</Box>
	)
}
export default ScrollWrapper

const iconButtonStyle = {
	backgroundColor: '#ffffff',
	// mr: 2,
	'&: hover' : {
		backgroundColor: '#ffffff',
		opacity: .9,
	}
}