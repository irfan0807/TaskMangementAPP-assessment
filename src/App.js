
import './App.css';
import Column from './Column';
import { useState } from 'react';

function App() {
  const initialTasks = [
    { title: 'Task 1', description: 'Description for Task 1', column: 'ToDo' },
    { title: 'Task 2', description: 'Description for Task 2', column: 'In Progress' },
    { title: 'Task 3', description: 'Description for Task 3', column: 'Done' },
    { title: 'Task 4', description: 'Description for Task 4', column: 'Done' },
    { title: 'Task 5', description: 'Description for Task 5', column: 'In Progress' },
  ];

  const initialColumns = ['ToDo', 'In Progress', 'Done'];
  // const colors = ['#C70039', '#F8DE22', '#33BBC5'];

  const [tasks, setTasks] = useState(initialTasks);

  const moveTask = (task, newColumn) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((t) =>
        t.title === task.title ? { ...t, column: newColumn } : t
      );
      return updatedTasks;
    });
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <div className="columns">
        {initialColumns.map((column, index) => (

          <Column
            key={index}
            name={column}

            color={Object.values(column)}

            tasks={tasks.filter((task) => task.column === column)}
            moveTask={moveTask}
            columns={initialColumns}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

const initi = [{
  Todo: "red",
  In_Progress: "yellow",
  Done: "green"
}];

// Extract values using map
const extractedValues = initi.map(obj => Object.values(obj));

console.log(extractedValues); // Output: [["red", "yellow", "green"]]


