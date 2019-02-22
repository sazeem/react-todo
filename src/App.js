import './App.css';
import logo from './logo.svg';
import React, { Component } from 'react';
import TasksList from './components/tasksTable'
import  { Action, ClearButton } from './components/actions'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      initialData: [],
      value: true
    };
  }

  addItem = (item) => {
    if (!item) {
      return this.setState({value: false})
    }
    const newItem = {
      id: Math.floor(Math.random() * Math.floor(10000)),
      text: item
    };
    this.setState({
      data: [...this.state.data, newItem],
      initialData: [...this.state.data, newItem],
      value: true
    });
  }

  removeItem = (id) => {
    let updatedData = this.state.data;
    updatedData = updatedData.filter(item => item.id !== id);
    this.setState({ 
      data: updatedData,
      initialData: updatedData,
      value: true
    });
  }

  searchItem = (item) => {
    if(!item){
      return this.setState({
        data: this.state.initialData,
        value: true
      });
    }
    let updatedData = this.state.initialData
    updatedData = updatedData.filter(value => {
      return ((value.text.toLowerCase().search(item.toLowerCase())) !== -1)
    });
    this.setState({
      data: updatedData,
      value: true
    });
  }

  clearList = () => {
    this.setState({
      data: [],
      initialData: [],
      value: true
    });
  }

  render() {
    const addItem = this.addItem;
    const clearList = this.clearList;
    const searchItem = this.searchItem;
    const removeItem = this.removeItem;
    const {data, initialData} = this.state;

    return (
      <div className = "App">
        <header className = "App-header">
          <img src={logo} className = "App-logo" alt = "logo" />
          <p>
            Simple React To-do App
          </p>
          <Action 
            addItem = { addItem }
            searchItem = { searchItem }
            dataLength = { data.length }
            listLength = { initialData.length }
          />
          {
            Boolean(data.length) &&  <div className="box">
              <TasksList 
                tasks = { data } 
                removeItem = { removeItem }
              />
            </div>
          }
          {
            Boolean( data.length ) && <div className="clear">
              <ClearButton
                clearList = { clearList }
              />
            </div>
          }
        </header>
      </div>
    );
  }
}

export default App;
