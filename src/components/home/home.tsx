import { EpisodeContainer, LocationContainer, MeetingContainer } from './section/container'


import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const SectionContainer = () => {

	return (
		<Box>

			<Box sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'baseline',
				p: 1
			}}>
				<Typography variant='h6' >Meet The Cast</Typography>
				<Button variant='outlined' sx={{ 
					color: '#fff', 
					border: '1px solid #65871c',
					textTransform: 'capitalize'
				}}>View All</Button>
			</Box>

			<Box sx={{ p: 1 }}>
				<MeetingContainer />
			</Box>

			<Box sx={{ p: 1, mt: 8 }}>
				<Typography variant='h6' paragraph>Episodes</Typography>
				<EpisodeContainer />
			</Box>

			<Box sx={{ p: 1, mt: 8 }}>
				<Typography variant='h6' paragraph>Locations</Typography>
				<LocationContainer />
			</Box>
		</Box>
	)
}
export default SectionContainer