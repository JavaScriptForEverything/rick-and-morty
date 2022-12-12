import type { SxProps } from '@mui/material'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

type Props = {
	url: string,
	primary?: string,
	title?: string,
	sx?: SxProps
}
export const Cast = ({ sx={}, url, primary='', title }: Props) => {

	return (
			<Box sx={sx}>
				<Box sx={{
					// border: '1px solid red',
					display: 'inline-flex',
					height: { xs: 120, sm: 100 }
				}}>
					<img 
						// src='/images/screenshot.jpg'
						src={url}
						alt='cast url'
						width='100%'
						style={{ borderRadius: 5 }}
						title={title}
					/>
				</Box>
				{!!primary && (
					<Box sx={{ my: 0, }}>
						<Typography sx={{
							color: 'inherit',
							textTransform: 'capitalize',
							fontSize: { xs: 10, sm: 16 },
							fontFamily: { xs: 'custom-medium', sm: 'custom-regular' }
						}}
						>{primary}</Typography>
					</Box>
				)}
			</Box>
	)
}
