import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Spinner from './Spinner'
import {useNavigate} from 'react-router-dom'
import { smallImage } from '../util'

const GameDetail = () => {

	const navigate = useNavigate()

	const exitDetailHandler = (e) => {
		if (e.target.classList.contains('shadow')) {
			document.body.style.overflow = 'auto'
			navigate('/')
		}
	}

	const { game, screen, isLoading} = useSelector(state => state.detail)
	
	return (
		<>	
			<CardShadow className="shadow" onClick={exitDetailHandler}>
				<Detail className="cardShadow-detail">
					{!isLoading ? (<>
						<Stats>
							<div className="rating">
								<h3>{game ? game.name : null}</h3>
								<p>Rating: {game ? game.rating : null}</p>
							</div>
							<Info>
								<h3>Platforms</h3>
								<Platforms>
									{game ? game.platforms.map(data => (
										<h3 key={data.platform.id}>{data.platform.name}</h3>
									)) : null}
								</Platforms>
							</Info>
						</Stats>
						<Media>
							<img src={game ? smallImage(game.background_image, 1280) : null} alt="" />
						</Media>
						<Description>
							<p>{game ? game.description_raw : null}</p>
						</Description>
						<div className="gallery">
							{screen ?screen.results.map(screen => (
								<img src={smallImage(screen.image, 1280)} key={screen.id} alt="" />
							)) : null}
						</div>
					</>) : <Spinner />}
				</Detail>
			</CardShadow>
			
		</>
	)
}

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0,0,0,0.5);
	position: fixed;
	top: 0;
	left: 0;
	&::-webkit-scrollbar {
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}
	&::-webkit-scrollbar-track {
		background: white;
	}
`

const Detail = styled(motion.div) `
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 3rem;
	background: white;
	position: absolute;
	left: 50%;
	top: 10%;
	transform: translateX(-50%);
	color: black;
	img {
		width: 100%;
	}
`

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Info = styled(motion.div)`
	text-align: center;
`

const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 3rem;
	}
`

const Media = styled(motion.div)`
	margin-top: 3rem;
	img {
		width: 100%;
	}
`

const Description = styled(motion.div)`
	margin: 3rem 0rem;
`

export default GameDetail