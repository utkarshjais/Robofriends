import {CHANGE_SEARCH_FIELD,
	REQUESTS_ROBOTS_PENDING,
	REQUESTS_ROBOTS_SUCCESS,
	REQUESTS_ROBOTS_FAILED} from './constants.js'
const initialState={
	searchField:''
}
export const searchRobots=(state=initialState,action={})=>{
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({},state,{searchField: action.payload});
		default:
			return state;
	}
}
const initialStateRobots={
	robots:[],
	isPending:false,
	error:''
}

export const requestRobots=(state=initialStateRobots,action={})=>{
	switch(action.type){
		case REQUESTS_ROBOTS_PENDING:
			return Object.assign({},state,{isPending:true})
		case REQUESTS_ROBOTS_SUCCESS:
			return Object.assign({},state,{robots:action.payload,isPending:false})
		case REQUESTS_ROBOTS_FAILED:
			return Object.assign({},state,{error:action.payload,isPending:false})
		default:
			return state;
	}
}