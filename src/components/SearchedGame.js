import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {loadDetail} from '../actions/detailAction'
import { popup } from '../animation'


const SearchedGame = ({name, released, image, id}) => {

	const dispatch = useDispatch()
	const loadDetailHandler = () => {
		document.body.style.overflow = 'hidden'
		dispatch(loadDetail(id))
	}

	return (
		<StyledGame variants={popup} initial="hidden" animate="show" layoutId={id} onClick={loadDetailHandler}>
			<Link to={`/game/${id}`}>
				<h3>{name}</h3>
				<p>{released}</p>
				<img src={image} alt={name} />
			</Link>
		</StyledGame>
	)
}

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 0.5rem;
	overflow: hidden;
	cursor: pointer;

	img {
		height: 30vh;
		width: 100%;
		object-fit: cover;
	}
`

export default SearchedGame
