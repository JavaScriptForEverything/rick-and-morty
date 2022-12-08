import { Cast } from '../home/section/component'


import Box from '@mui/material/Box'


export const MeetingContainer = () => {

	return (
		<Box>

			<Box sx={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: 4,
			}}>

				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(cast => (
					<Box key={cast} sx={{  }}>
						<Cast key={cast}
							url='/images/screenshot.jpg'
							primary='Cast Name'
						/>
					</Box>
				))}
			</Box>

		</Box>
	)
}
