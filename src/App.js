import React,{Component} from 'react';
import {connect} from 'react-redux';
import CardList from './CardList';
import Searchbox from './Searchbox';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import {setSearchField,requestRobots} from './actions';
const mapStatestoProps=state=>{
	return{
		searchField:state.searchRobots.searchField,
		robots:state.requestRobots.robots,
		error:state.requestRobots.error,
		isPending:state.requestRobots.isPending
	}
}
const mapDispatchtoProps=(dispatch)=>{
	return{
	onsearchchange:(event)=>dispatch(setSearchField(event.target.value)),
	onRequestRobots:()=>dispatch(requestRobots())
}}
class App extends Component
{
	componentDidMount(){
	this.props.onRequestRobots();
		
	}
	render()
	{
	const {searchField,onsearchchange,robots}=this.props;
	const filteredrobots=robots.filter(robots=>{
			return robots.name.toLowerCase().includes(searchField.toLowerCase());
		})
	if(robots.length===0)
	{
		return <h1>Loading...</h1>
	}	
	else
	{
		return(
			<div className='tc'>
			<h1 className='f1'>Robofriends</h1>
			<Searchbox searchchange={onsearchchange}/>
			<Scroll>
			<ErrorBoundry>
			<CardList robots={filteredrobots} />
			</ErrorBoundry>
			</Scroll>
			</div>
	
		);
	}
	}

}
export default connect(mapStatestoProps,mapDispatchtoProps)(App);