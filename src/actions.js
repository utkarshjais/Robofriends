import {CHANGE_SEARCH_FIELD,
	REQUESTS_ROBOTS_PENDING,
	REQUESTS_ROBOTS_SUCCESS,
	REQUESTS_ROBOTS_FAILED} from './constants.js'
export const setSearchField=(text)=>({
	type:CHANGE_SEARCH_FIELD,
	payload:text
})

export const requestRobots=()=>(dispatch)=>{
	dispatch({type:REQUESTS_ROBOTS_PENDING});
			fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(data=>dispatch({type:REQUESTS_ROBOTS_SUCCESS,payload:data}))
		.catch(error=>dispatch({type:REQUESTS_ROBOTS_FAILED,payload:error}))
}