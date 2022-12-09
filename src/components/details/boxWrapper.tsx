import type { SxProps } from '@mui/material'
import Box from '@mui/material/Box'

type Props = {
	children?: React.ReactNode,
	sx?: SxProps,
	borderWidth?: number,
	padding?: number,
	backgroundColor?: string | number,
	borderRadius?: number,
	gradientColors?: string[] | number[],
	gradientDegree?: number,
}
const BoxWrapper = (props: Props) => {

	const {
		children,
		borderWidth = .14,
		padding = 2,
		backgroundColor = '#191d29',
		borderRadius = 2,
		gradientColors = [ '#15ddea88', '#9dfe0088' ],
		gradientDegree = 0,
		sx={}
	} = props

	return (
		<Box sx={{
			...sx,
			p: .14
		}}>
			<Box sx={{
				backgroundImage: `linear-gradient(${gradientDegree}deg, ${[...gradientColors]})`,
				p: borderWidth,
				borderRadius,
			}}>

				<Box sx={{ 
					display: 'flex',  
					backgroundColor,
					padding,
					borderRadius,
				}}>
					<Box sx={{ flex: 1 }}>
						{children}
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
export default BoxWrapper
