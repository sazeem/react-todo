import './App.css';
import logo from './logo.svg';
import React, { Component } from 'react';
import TasksList from './components/tasksTable'
import  { Action, ClearButton } from './functions/actions'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      initialData: [],
      value: true
    };    
    this.addItem = this.addItem.bind(this);
    this.searchItem = this.searchItem.bind(this);
    this.clearList = this.clearList.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(item) {
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

  removeItem(id) {
    let updatedData = this.state.data;
    updatedData = updatedData.filter(item => item.id !== id);
    this.setState({ 
      data: updatedData,
      initialData: updatedData,
      value: true
    });
  }

  searchItem(item) {
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

  clearList() {
    this.setState({
      data: [],
      initialData: [],
      value: true
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Simple React To-do App
          </p>
          <Action 
            addItem = {this.addItem} 
            searchItem = {this.searchItem}
            dataLength = {this.state.data.length}
            listLength = {this.state.initialData.length}
          />
          {
            this.state.data.length ?  <div className="box">
              <TasksList 
                tasks={this.state.data} 
                removeItem={this.removeItem} 
              />
            </div> : null
          }
          {
            this.state.data.length ? <div className="clear">
              <ClearButton
                clearList={this.clearList}
              />
            </div> : null
          }
        </header>        
      </div>
    );
  }
}

export default App;
