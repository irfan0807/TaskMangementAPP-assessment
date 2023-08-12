import Task from './Task';
import React,{useState} from 'react';

function Column({ name, tasks,color, moveTask, columns }) {

 
    

    return (
        
      <div className="container">
     

        

        <h2>{name}</h2>
        {tasks.map((task) => (
          <Task key={task.title} task={task} moveTask={moveTask} columns={columns} />
        ))}

        </div>
        
      
    
    );
  }

  export default Column;