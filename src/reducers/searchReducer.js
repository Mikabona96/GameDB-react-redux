const initState = {
	term: ''
}

const searchReducer = (state = initState, action) => {
	switch (action.type) {
		case "CHANGE_VALUE":
			return {
				...state,
				term: action.payload
			}
	
		default:
			return {...state}
	}
}

export default searchReducer;