import React from 'react';

const Task = ({task, removeItem}) => {
  return (
    <tr>
      <td width="60%">
        <hr/> {task.text}
      </td>    
      <td width="30%">
        <hr/> <span onClick={() => removeItem(task.id)}>&#10004;</span>
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
    </table>
  );
}

export default TasksList;