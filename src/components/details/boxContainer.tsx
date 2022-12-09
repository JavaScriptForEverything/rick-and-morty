import type { SxProps } from '@mui/material'
import Box from '@mui/material/Box'

type Props = {
	children?: React.ReactNode,
	borderWidth?: number,
	margin?: number,
	width?: number | string,
	height?: number | string,
	backgroundColor?: string,
	borderRadius?: number,
	// sx?: React.CSSProperties
	sx?: SxProps
}
const BoxContainer = (props: Props) => {
	const {
		children,
		width=250,
		height=250,
		borderWidth = .14,
		margin = 2,
		backgroundColor = '#191d29',
		borderRadius = 2,
		sx={}
	} = props

	console.log(width, typeof width )

	return (
		<Box>
			<Box sx={{ 
				flex: 1,
				display: 'flex',
				alignItems: 'center',
				position: 'relative',
			}}>

				<Box sx={{
					flex: typeof width === 'number' ? 0 : 1,

					backgroundImage: 'linear-gradient(135deg, #15ddeacc, #9dfe0088)',
					p: borderWidth,
					borderRadius: 2,
				}}>
					<Box sx={{
						// flex: 1,
						width,
						height,
						backgroundColor,
						borderRadius,
						p: margin,
					}}>
						<Box sx={{
							// flex: 1,
							width: '100%', 
							height: '100%',
							backgroundColor,
							borderRadius,
						}}>
							<Box sx={{
								...sx,
							width: '100%', 
							height: '100%',
							}}>
								{children}
							</Box>
						</Box>
					</Box>
				</Box>

				<Box sx={{
					height: 180,
					borderRight: '1px solid #9dfe0088',
					display: { xs: 'none', md: 'block' },

					position: 'absolute',
					right: -80,
					ml: 5,
				}} />

			</Box>
		</Box>
	)
}
export default BoxContainer


/*
					<Box sx={{ 
						display: 'flex',
						// justifyContent: 'space-between',
						alignItems: 'center'
					}}>
						<Box sx={{
							height: 180,
							borderRight: '1px solid white'
						}} />
					</Box>

*/