import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Spinner from './Spinner'
import {useNavigate} from 'react-router-dom'
import { smallImage } from '../util'
import {useLocation} from 'react-router'

import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'

const GameDetail = () => {

	const pathId = +useLocation().pathname.split('/')[2]
	const navigate = useNavigate()

	const exitDetailHandler = (e) => {
		if (e.target.classList.contains('shadow')) {
			document.body.style.overflow = 'auto'
			navigate('/')
		}
	}

	const getPlatform = (platform) => {
		switch (platform) {
			case 'Playstation 4':
				return playstation
			case 'Xbox One':
				return xbox
			case 'PC':
				return steam
			case 'Nintendo Switch':
				return nintendo
			case 'iOS':
				return apple
			default:
				return gamepad
		}
	}

	console.log(typeof pathId, 'coco jambo')

	const { game, screen, isLoading} = useSelector(state => state.detail)
	
	return (
		<>	
			<CardShadow className="shadow" onClick={exitDetailHandler}>
				<Detail layoutId={pathId} className="cardShadow-detail">
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
										<img src={getPlatform(data.platform.name)} alt="" key={data.platform.id}></img>
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
	z-index: 50;
`

const Detail = styled(motion.div) `
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 3rem;
	background: white;
	position: absolute;
	left: 10%;
	/* transform: translateX(-50%); */
	top: 10%;
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