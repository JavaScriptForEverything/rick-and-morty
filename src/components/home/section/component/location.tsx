
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
			<Typography color='inherit'>{primary}</Typography>
			<Typography color='inherit'>{subTitle}</Typography>
		</>
	)
}
