import { Location } from '../component'
import ClipContainerWrapper from '../../../clipContainerWrapper'

import Box from '@mui/material/Box'


export const LocationContainer = () => {

	return (
		<Box>

			<ClipContainerWrapper containerId='locationContainer'>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(location => (
					<Box key={location} sx={{ flexShrink: 0 }}>
						<Location 
							primary={`title ${location}`}
							subTitle={`SubTitle ${location}`}
						/>
					</Box>
				))}
			</ClipContainerWrapper>

		</Box>
	)
}
