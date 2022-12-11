// import BoxWrapper from '../../../details/boxWrapper'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'



type Props = {
	primary: string,
	subTitle: string
}
export const Episode = ({ primary, subTitle }: Props) => {

	return (
		<>
			<Box sx={{ m: 1, }}>
				{/* <BoxWrapper 
					padding={2}
					clipPath= 'polygon(0 0, 100% 0, 100% 60%, 80% 100%, 0 100%)'
					gradientDegree={135}
					sx={{
						minWidth: 250,
						textTransform: 'uppercase',
					}}
				>  */}
					<Typography color='inherit' sx={titleStyle}>{primary}</Typography>
					<Typography color='inherit' sx={subTitleStyle}>{subTitle}</Typography>
				{/* </BoxWrapper> */}
			</Box>
		</>
	)
}

const titleStyle = {
	mb: .4,
	opacity: { xs: .9, sm: .8 },
	fontSize: { xs: 10, sm: 16 }
}
const subTitleStyle = {
	fontSize: { xs: 12, sm: 16 }
}