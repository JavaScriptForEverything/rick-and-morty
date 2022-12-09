import Header from '../home/header'
import BoxContainer from './boxContainer'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const section_1_items = [
	{
		src: '/media_asset/cast_details/Icons/png/Status.png',
		status: 'status',
		title: 'Alive'
	},
	{
		src: '/media_asset/cast_details/Icons/png/Species.png',
		status: 'species',
		title: 'Human'
	},
	{
		src: '/media_asset/cast_details/Icons/png/Gender.png',
		status: 'gender',
		title: 'Male'
	},
]
const section_2_3_items = [
	{
		src: '/media_asset/cast_details/Icons/png/Origin.png',
		status: 'Origin',
		title: 'Earth (C-137)',
		icon: '/media_asset/cast_details/Icons/png/Redirect.png',
	},
	{
		src: '/media_asset/cast_details/Icons/png/Location.png',
		status: 'Last Known Location',
		title: 'Citadel Of Ricks',
		icon: '/media_asset/cast_details/Icons/png/Redirect.png',
	},
]

const DetailsPage = () => {

	return (
		<>
		<Box sx={{
			backgroundColor: '#191d29',
			color: 'white',
			backgroundImage: 'url("/media_asset/cast_details/background/Background.png")',
			backgroundPosition: 'center',
			backgroundAttachment: 'fixed',
			backgroundRepeat: 'no-repeat',
		}}>
			<Header />

			<Grid container spacing={2} sx={{ p: 1, mt: { xs: 4, sm: 8 } }}>
				<Grid item xs={12} sm={6}>
					<Box id='left-section' sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						mb: { xs: 2, sm: 0 }
					}}>
						<Typography 
							variant='h4'
							sx={{
								color: '#15ddea',
							}}
						>Rick Sanchez</Typography>
						<BoxContainer sx={{ m: 0 }}>
							<img 
								src='/images/screenshot.jpg'
								alt='/images/screenshot.jpg'
								width={'100%'}
								height={'100%'}
								style={{
									borderRadius: 4
								}}
							/>
						</BoxContainer>
					</Box>
			</Grid>
				<Grid item xs={12} sm={6}>

					<Box id='right-section'>
						<Box id='item-1' sx={{
							display: 'flex',
							justifyContent: 'space-between',
							gap: 4
						}}>
							{section_1_items.map(({ src, status, title }) => (
									<Box key={title} sx={{
										flex: 1,
										border: '1px solid dodgerblue',
										borderRadius: 2,
										p: 1,
									}} >
										<Box sx={{ width: 	{ xs: 8*4, sm: 8*6 } }} >
											<img src={src} alt={src} width='100%' />	
										</Box>
										<Typography sx={{ fontSize: { xs: 10, sm: 16 } }}>{status}</Typography>
										<Typography sx={{ fontSize: { xs: 20, sm: 24 } }}>{title}</Typography>
									</Box>
							))}
						</Box>

						<Box id='item-2-3'>
							{section_2_3_items.map( item => (
								<Box key={item.title} sx={{
									flex: 1,
									border: '1px solid dodgerblue',
									borderRadius: 2,
									p: 1,
									mt: 4
								}} >
									<Box sx={{ width: 	{ xs: 8*4, sm: 8*6 } }} >
										<img 
											src={item.src}
											alt={item.src}
											width='100%' 
										/>	
									</Box>
									<Typography sx={{ fontSize: { xs: 10, sm: 16 } }}>{item.status}</Typography>
									<Box sx={{
										flex: 1,
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center'
									}}>
										<Typography sx={{ fontSize: { xs: 20, sm: 24 } }}>{item.title}</Typography>
										<Box sx={{ width: { xs: 8*3, sm: 8*4 }, mr: 2 }} >
											<img 
												src={item.icon}
												alt={item.icon}
												width='100%' 
											/>	
										</Box>
									</Box>
								</Box>
							))}
						</Box>

						<Box id='item-4'>
								<Box sx={{
									flex: 1,
									border: '1px solid dodgerblue',
									borderRadius: 2,
									p: 1,
									my: 4
								}} >
									<Box sx={{ width: 	{ xs: 8*4, sm: 8*6 } }} >
										<img 
											src='/media_asset/cast_details/Icons/png/Episode.png'
											alt='/media_asset/cast_details/Icons/png/Episode.png'
											width='100%' 
										/>	
									</Box>
									<Typography sx={{ fontSize: { xs: 10, sm: 16 } }}>Episode(S)</Typography>
									<Box sx={{
										flex: 1,
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center'
									}}>
										<Box sx={{ fontSize: { xs: 20, sm: 24 } }}>
											<ul>
												<li>Pilot</li>
												<li>Lawnmover Dog</li>
												<li>Anatomy Park</li>
												<li>
													<Box sx={{
														display: 'flex',
														alignItems: 'center',
														fontSize: { xs: 20, sm: 24 } 
													}}>
														<Typography sx={{ fontSize: 'inherit' }}> M. Night Shaym </Typography>
														<Typography component='span' sx={{
															transform: 'rotate(-35deg)',
															fontSize: 'inherit'
														}}>-</Typography>
														<Typography component='span' sx={{ fontSize: 'inherit' }}>Aliens!</Typography>
													</Box>
												</li>
												<li>Meeseeks And Destroy</li>
											</ul>
										</Box>
									</Box>
								</Box>

						</Box>
					</Box>
				</Grid>
			</Grid>

		</Box>
		</>
	)
}
export default DetailsPage
