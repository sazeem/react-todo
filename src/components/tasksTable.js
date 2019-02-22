import React from 'react';
import './functions.css';

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

const TasksList = ({tasks, removeItem}) => {  
  const newTask = tasks.map((task) => {
    return (<Task task={task} key={task.id.toString()} removeItem={removeItem}/>)
  });
  return (
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
        {newTask}
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
  );
}

export default TasksList;