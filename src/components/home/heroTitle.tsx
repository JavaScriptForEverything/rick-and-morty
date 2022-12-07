
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


const HeroTitle = () => {

	return (
		<Box>

			<Box sx={ theme => ({
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 2,
				mt: 8,
				fontSize: 40
				// fontSize: 128
			})}
				// variant='h4'
			>
				<Typography variant='inherit'>THE</Typography>
				<Typography>
					<img 
						src='/media_asset/home_page/hero/portal.png'
						alt='/media_asset/home_page/hero/portal.png'
						height={'128 px'}
					/>
				</Typography>
				<Typography variant='inherit'>RICK</Typography>
				<Box sx={{
					position: 'relative'
				}}>
					<img 
						src='/media_asset/home_page/hero/pill.png'
						alt='/media_asset/home_page/hero/pill.png'
						height={'5 rem'}
						style={{
							position: 'absolute',
							top: -8
						}}
					/>
					<Typography variant='inherit'>&</Typography>
				</Box>
			</Box>

			<Box sx={{
				display: 'flex',
				justifyContent: 'flex-end',
				alignItems: 'center',
				gap: 4
			}}>
				<Button variant='contained'>Watch Now</Button>
				<Typography color='primary' sx={{ width: 250, }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Doloribus, recusandae autem nobis explicabo quibusdam eos, 
				</Typography>
			</Box>

		</Box>
	)
}
export default HeroTitle
