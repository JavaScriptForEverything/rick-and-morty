import { Episode } from '../component'
import ClipContainerWrapper from '../../../clipContainerWrapper'

import Box from '@mui/material/Box'


export const EpisodeContainer = () => {

	return (
		<Box>

			<ClipContainerWrapper containerId='episodeContainer'>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(episode => (
					<Box key={episode} sx={{ flexShrink: 0 }}>
						<Episode 
							primary={`title ${episode}`}
							subTitle={`SubTitle ${episode}`}
						/>
					</Box>
				))}
			</ClipContainerWrapper>

		</Box>
	)
}
