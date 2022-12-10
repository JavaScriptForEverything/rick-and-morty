import type { SxProps } from '@mui/material'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

type Props = {
	url: string,
	primary: string,
	title?: string,
	sx?: SxProps
}
export const Cast = ({ sx={}, url, primary, title }: Props) => {

	return (
			<Box sx={sx}>
				<img 
					// src='/images/screenshot.jpg'
					src={url}
					alt='cast url'
					width='100%'
					height='100%'
					style={{ borderRadius: 5 }}
					title={title}
				/>
				<Box sx={{ my: 2 }}>
					<Typography color='inherit'>{primary}</Typography>
				</Box>
			</Box>
	)
}
