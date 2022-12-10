import { Episode } from '../component'

import Box from '@mui/material/Box'
import BoxWrapper from '../../../details/boxWrapper'
import ScrollWrapper from '../../scrollWrapper'


export const EpisodeContainer = () => {

	return (
		<ScrollWrapper sx={{ mt: 2 }}>

			<Box sx={{
				display: 'flex',
				gap: 2,
				overflowX: 'auto'
			}}>

				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(episode => (
					<BoxWrapper key={episode} 
						clipPath= 'polygon(0 0, 100% 0, 100% 60%, 80% 100%, 0 100%)'
						gradientDegree={135}
						sx={{
							minWidth: 250,
							textTransform: 'uppercase',
						}}
					> 
							<Episode 
								primary={`title ${episode}`}
								subTitle={`SubTitle ${episode}`}
							/>
					</BoxWrapper> 
				))}
			</Box>
		</ScrollWrapper>
	)
}
