function Task({ task, moveTask, columns }) {
    const handleMove = (e) => {
      moveTask(task, e.target.value);
    };
  
    return (
      <div className="task">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <select value={task.column} onChange={handleMove}>
          {columns.map((column) => (
            <option key={column} value={column}>
              {column}
            </option>
          ))}
        </select>
      </div>
    );
  }

  export default Task;