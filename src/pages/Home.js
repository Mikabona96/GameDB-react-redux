import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import { useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Game from '../components/Game';
import { Outlet, useLocation } from 'react-router';
import SearchedGame from '../components/SearchedGame';
import { fadeIn } from '../animation';


const Home = () => {

	const pathId = useLocation().pathname.split('/')[2]

 	const dispatch = useDispatch()
  	useEffect(() => {
    	dispatch(loadGames())
  	}, [dispatch])

	// Get that data back
	const {popular, newGames, upcoming, searched} = useSelector(state => state.games)
	return (
		<GameList variants={fadeIn} initial="hidden" animate="show">
			<AnimateSharedLayout type="crossfade">
				<AnimatePresence>
					{pathId && <Outlet />}
				</AnimatePresence>
				{searched.length ? (<><h2>Searched Games:</h2>
				<Games>
					{searched.map(game => (
						<SearchedGame name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id}/>
					))}
				</Games></>) : null}
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
			</AnimateSharedLayout>
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



