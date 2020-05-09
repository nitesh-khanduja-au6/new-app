import React, { Component } from 'react';
import {CardList} from './components/card-list.component/card-list.component'
import './App.css';
import {SearchBar} from './components/search-bar/search-bar.components'
class App extends Component{
  constructor(){
    super();
    this.state ={
      monsters: [],
      searchField :''
    }
   
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>
    response.json()
    )
    .then(users =>this.setState({monsters:users}))
    
  }
  handlechange = (e) => {this.setState({searchField:e.target.value})
}

  
  render(){
  const {monsters,searchField}= this.state
  const filteredmonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase()))


return(
  <div className="App">
    <h1>Moster Students</h1>
< SearchBar
placeholder ='search Monster'
handlechange ={this.handlechange}></SearchBar>


    <CardList monsters ={filteredmonsters}>
  
    </CardList>
 
</div>
  
)
}
}

export default App;
