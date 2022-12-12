import { useEffect } from 'react'
import * as characterReducer from '../../store/characterReducer'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

import BoxWrapper from '../details/boxWrapper'
import { Cast } from '../home/section/component'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'


export const MeetingContainer = () => {
	const dispatch = useAppDispatch()
	const { characters } = useAppSelector(state => state.character)

	useEffect(() => {
		dispatch(characterReducer.getCharacters('https://rickandmortyapi.com/api/character'))
	}, [dispatch])


	return (
		<Box>

			<Grid container spacing={4}>
				{characters?.map(cast => (
					<Grid key={cast.id} item xs={6} sm={4} md={2}>
						<BoxWrapper 
							padding={1}
							clipPath= 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)'
							gradientDegree={135}
						>
							<Cast key={cast.id} 
								url={cast.image}
								primary={cast.name}
								path={`/cast/${cast.id}`}
							/>
						</BoxWrapper>
					</Grid>
				))}
			</Grid>

		</Box>
	)
}
