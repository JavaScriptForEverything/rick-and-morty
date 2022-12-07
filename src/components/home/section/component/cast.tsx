import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ClipContainer from '../../../clipContainer'

type Props = {
	url: string
	primary: string
	title?: string
}
export const Cast = ({ url, primary, title }: Props) => {

	return (
		<ClipContainer borderWidth={2} >
			<Box sx={{ m: 1, }}>
				<img 
					// src='/images/screenshot.jpg'
					src={url}
					alt='cast url'
					width='100%'
					height={120}
					style={{ borderRadius: 5 }}
					title={title}
				/>
				<Box sx={{ my: 2 }}>
					<Typography color='inherit'>{primary}</Typography>
				</Box>
			</Box>
		</ClipContainer>
	)
}
