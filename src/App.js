import './App.css';
import logo from './logo.svg';
import React, { Component } from 'react';
import AddButton from './components/addTodo';
import SearchInput from './components/searchTodos';
import ClearButton from './components/clearTodos';
import TasksList from './components/listTodos'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <header className = "App-header">
          <img src={logo} className = "App-logo" alt = "logo" />
          <p>
            Simple React To-do App
          </p>
          <div>
            <AddButton  />
            <SearchInput />
          </div>
          <div className="box">
            <TasksList />
          </div>
          <div className="clear">
            <ClearButton />
          </div>          
        </header>
      </div>
    );
  }
}

export default App;
