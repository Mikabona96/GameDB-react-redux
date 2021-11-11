import styled from 'styled-components';
import {motion} from 'framer-motion'
import logo from '../img/logo.svg'
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch, useSelector } from 'react-redux';


const Nav = () => {

	const inputValue = useSelector(state => state.search.term)

	const dispatch = useDispatch();


	const onChangeHandler = (e) => {
		dispatch({type: 'CHANGE_VALUE', payload: e.target.value})
	}

	const submitSearch = (e) => {
		e.preventDefault();
		dispatch(fetchSearch(inputValue))
		dispatch({type: 'CHANGE_VALUE', payload: ''})
	}

	// console.log(inputValue)
	const clearSearched = () => {
		dispatch({type: 'CLEAR_SEARCHED'})
	}
	return (
		<StyledNav>
			<Logo onClick={clearSearched}>
				<img src={logo} alt="logo" />
				<h1>Ignite</h1>
			</Logo>
			<form className="search">
				<input onChange={onChangeHandler} value={inputValue} type="text" placeholder="Type here..." />
				<button onClick={submitSearch} type="submit">Search</button>
			</form>
		</StyledNav>
	)
}

const StyledNav = styled(motion.nav)`
	padding: 1rem 5rem;
	text-align: center;
	input {
		width: 30%;
		font-size: 1rem;
		padding: 0.5rem 1rem;
		border: 0.1rem solid grey;
		/* outline: none; */
		border-radius: 0.5rem;
		margin-top: 1rem;
		/* box-shadow: 0px 0px 30px rgba(0,0,0, 0.2); */
	}
	button {
		font-size: 1rem;
		border: none;
		padding: 0.6rem 2rem;
		cursor: pointer;
		background: #ff7676;
		color: white;
	}
`
const Logo = styled(motion.div)`
	display: flex;
	justify-content: center;
	cursor: pointer;
`

export default Nav;