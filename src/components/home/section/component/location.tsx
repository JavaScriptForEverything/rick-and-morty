
import ClipContainer from '../../../clipContainer'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
	primary: string,
	subTitle: string
}
export const Location = ({ primary, subTitle }: Props) => {

	return (
		<>
			<ClipContainer width={200} height={100}> 
				<Box sx={{ m: 1, }}>
						<Typography color='inherit'>{primary}</Typography>
						<Typography color='inherit'>{subTitle}</Typography>
				</Box>
			</ClipContainer>
		</>
	)
}
