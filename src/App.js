import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component { //shortcut rcc

  constructor(props) { //shortcut con
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    };
    // this.handelChange=this.handelChange.bind(this);
  };
  componentDidMount() { //shortcut cdm, componentDidMount: show element on DOM first.
    // get API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  handelChange = (e) => {
    this.setState({
          searchField:e.target.value
    });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1 className="title">GBIT - MONSTERS ROLODEX</h1>
        <SearchBox placeholder="search monsters" handleChange={this.handelChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;