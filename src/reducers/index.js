import { combineReducers } from 'redux';
import detailReducer from './detailReducer';
import gamesReducer from './gamesReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
	games: gamesReducer,
	detail : detailReducer,
	search: searchReducer
})

export default rootReducer