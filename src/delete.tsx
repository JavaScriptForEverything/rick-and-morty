import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


type ClipContainerProps = {
	children?: React.ReactNode,
	borderWidth?: number
	borderColor?: string,
	backgroundColor?: string,
	color?: string,
}
const ClipContainer = (props: ClipContainerProps) => {
	const {
		children = <></>,
		borderWidth = 2,
		borderColor = '#9dfe00',
		backgroundColor = '#191d29',
		color = 'white'
	} = props

	const container = {
		width: 200,
		height: 200,
		// margin: `${borderWidth}px`,

		position: 'relative',
		backgroundColor: borderColor,
		clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100% )'
	}
	const childContainer = {
		width: `calc(100% - ${borderWidth * 2}px )`,
		height: `calc(100% - ${borderWidth * 2}px )`,

		position: 'absolute',
		top: `${borderWidth}px`,
		left: `${borderWidth}px`,

		clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100% )',
		backgroundColor,
		color,
	}
	return (
		<>
			<Box sx={container}>
				<Box sx={childContainer}>
					{children}
				</Box>
			</Box>
		</>
	)
}



const Image = () => {

	return (
		<>
		<ClipContainer
			// backgroundColor='red'
			borderColor='blue red blue yellow'
			borderWidth={10}
			// color='dodgerblue'

		>
			<Box sx={{ m: 1, }}>
				<img 
					src='/images/screenshot.jpg'
					alt='/images/screenshot.jpg'
					width='100%'
					height={120}
				/>
				<Box sx={{ my: 2 }}>
					<Typography color='inherit'>Text</Typography>
				</Box>
			</Box>
		</ClipContainer>
			
		</>
	)
}
export default Image
