import React, {Component} from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox"
import './App.css'

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots:[],
            searchField: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users=>{
            this.setState({robots:users});
        })
    }
    onSearchChange = (event) => {
        console.log(event.target.value);
        this.setState({searchField:event.target.value});
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className="tc">
            <h1 className = "f1">Robo Friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;