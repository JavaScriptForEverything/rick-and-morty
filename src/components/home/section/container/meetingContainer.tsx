import { Cast } from '../component'
import BoxWrapper from '../../../details/boxWrapper'
import ScrollWrapper from '../../scrollWrapper'

import Box from '@mui/material/Box'

export const MeetingContainer = () => {

	return (
		<Box sx={{
			// position: 'relative'
		}}>

		<ScrollWrapper id='meetingContainer'>
			<Box sx={{
				display: 'flex',
				gap: 2,
				overflowX: 'auto'
			}}>

			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(cast => (
				<BoxWrapper key={cast} 
					padding={1}
					clipPath= 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)'

					sx={{ 
						flexShrink: 0, 
						width: 200 
					}}
				>
					<Cast key={cast} 
						url='/images/screenshot.jpg' 
						primary='cast name'
						path={`/cast/${cast}`}
					/>
				</BoxWrapper>
			))}
			</Box>
		</ScrollWrapper>
		</Box>
	)
}
