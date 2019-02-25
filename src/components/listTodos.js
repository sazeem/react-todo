import './components.css';
import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions';

const filterItems = ({tasks, searchItem}) => {
  if (!searchItem.trim()) {
    return tasks;
  }
  return tasks.filter((item) => 
    item.text.toLowerCase().search(searchItem.toLowerCase()) !== -1
  )
}

const Task = ({task, removeItem}) => {
  const handleClick = () => {
    removeItem(task.id)
  }

  return (
    <tr>
      <td width="60%">
        {task.text}
      </td>    
      <td width="30%">
        <span onClick={ handleClick }>&#10004;</span>
      </td>      
    </tr>          
  )
}

const TasksList = ({tasks, searchItem, removeItem}) => {  
  if (!tasks.length) {
    return (<h4>Todo list is empty</h4>)
  }

  const taskList = filterItems({tasks, searchItem}).map(item => (
    <Task 
      key = {item.id}
      task = {item} 
      removeItem = { removeItem }
    />
  ))
  return !taskList.length ? (<h4>No match found</h4>) : (
    <table width="100%">
      <tbody>
        <tr className="heading">
          <td>
            Tasks
          </td>
          <td>
            Done?
          </td>
        </tr>
          {taskList}
        <tr>
          <td>
            <br/>
          </td>
          <td>
            <br/>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  searchItem: state.searchItem
})

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItem(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList)
