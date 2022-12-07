import { Cast } from '../component'
import ClipContainerWrapper from '../../../clipContainerWrapper'

import Box from '@mui/material/Box'


export const MeetingContainer = () => {

	return (
		<Box>

			<ClipContainerWrapper containerId='meetingContainer'>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(cast => (
					<Box key={cast} sx={{ flexShrink: 0 }}>
						<Cast key={cast}
							url='/images/screenshot.jpg'
							primary='Cast Name'
						/>
					</Box>
				))}
			</ClipContainerWrapper>

		</Box>
	)
}
