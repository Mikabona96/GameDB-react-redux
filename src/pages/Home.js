import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Game from '../components/Game';

const Home = () => {
 	const dispatch = useDispatch()
  	useEffect(() => {
    	dispatch(loadGames())
  	}, [dispatch])

	// Get that data back
	const {popular, newGames, upcoming} = useSelector(state => state.games)
	return (
		<GameList>
			<h2>Upcoming Games</h2>
			<Games>
				{upcoming.map(game => (
					<Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id}/>
				))}
			</Games>
			<h2>Popular Games</h2>
			<Games>
				{popular.map(game => (
					<Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id}/>
				))}
			</Games>
			<h2>New Games</h2>
			<Games>
				{newGames.map(game => (
					<Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id}/>
				))}
			</Games>
		</GameList>
	)
}

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 2rem 0 4rem;
	}
`

const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-column-gap: 2rem;
	grid-row-gap: 3rem;
`

export default Home



