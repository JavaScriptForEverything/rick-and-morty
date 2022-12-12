import { Cast } from '../home/section/component'


import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import BoxWrapper from '../details/boxWrapper'


export const MeetingContainer = () => {

	return (
		<Box>

			<Grid container spacing={4}>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(cast => (
					<Grid key={cast} item xs={6} sm={4} md={2}>
						<BoxWrapper 
							padding={1}
							clipPath= 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)'
							gradientDegree={135}
						>
							<Cast key={cast} 
								url='/images/screenshot.jpg' 
								primary='Cast Name' 
							/>
						</BoxWrapper>
					</Grid>
				))}
			</Grid>

		</Box>
	)
}
