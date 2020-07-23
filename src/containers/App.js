import React, { Component } from 'react';
import CardList from '../components/CardList'
import {robots} from './robots';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component{
	constructor(){
		super()
		this.state={
			robots: robots,
			searchfield: ''
		}
	}

	componentDidMount(){

		fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => response.json)
		.then( users => {this.setState({ robots:robots })})
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}

	render(){
			const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			});

			if(this.state.robots.length === 0){
				return <h1>Loading...</h1>
			}
			else{
				return (
					<div className="tc">
						<h1 className="f1">RoboFriends</h1>
						<Searchbox searchchange={this.onSearchChange}/>
						<Scroll>
							<CardList robots={filteredRobots}/>
						</Scroll>
					</div>
				);
			}
	}
}

export default App;