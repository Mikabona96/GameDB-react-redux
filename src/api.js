//Base URL

const base_url = "https://api.rawg.io/api/"

//Getting the date

const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1
	if (month < 10) {
		return `0${month}`
	}
	return month
}

const getCurrentDay = () => {
	const day = new Date().getDate()
	if (day < 10) {
		return `0${day}`
	}
	return day
}

const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

const apiKey = `${process.env.REACT_APP_API_KEY}`;

// Popular Games

const popular_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${new_games}`

// GAme Details

export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${apiKey}`
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${apiKey}`

// Searched Game

export const searchGameUrl = (game_name) => `${base_url}games?search=${game_name}&key=${apiKey}&page_size=9`

                                         //  https://api.rawg.io/api/games?search=forza&page_size=9&key=d6896e8bc8e34e6c8b2dd3e1d783cade