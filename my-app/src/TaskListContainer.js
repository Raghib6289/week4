// Practical Application: Building a Complete Component Example
// Now, let's consolidate our learning by building a slightly more complex component that utilizes functional components, props, state, event handling, and conditional rendering. We'll create a simple Task List application.

// This application will allow users to:

// See a list of tasks.
// Add new tasks.
// Mark tasks as completed.
// Optionally, filter tasks to show only active or completed ones.
// We will break this down into several smaller components:

// TaskListContainer: The main component that manages the state of all tasks and renders other components.
// TaskItem: A component to display a single task.
// AddTaskForm: A form to add new tasks.
// Step 1: Setting up the `TaskListContainer` Component
// This component will hold the array of tasks in its state and manage adding new tasks.

// Create a new file: src/TaskListContainer.js



// src/components/TaskListContainer.js

// import React, { useState } from 'react';
// import TaskItem from './TaskItem'; // We'll create this next
// import AddTaskForm from './AddTaskForm'; // We'll create this next

// function TaskListContainer() {
//   const [tasks, setTasks] = useState([
//     { id: 1, text: 'Learn React basics', completed: true },
//     { id: 2, text: 'Build a component', completed: false },
//     { id: 3, text: 'Understand state and props', completed: false },
//   ]);

//   const addTask = (taskText) => {
//     const newTask = {
//       id: Date.now(), // Simple unique ID generation
//       text: taskText,
//       completed: false,
//     };
//     setTasks([...tasks, newTask]); // Add new task to the existing array
//   };

//   const toggleTaskCompletion = (taskId) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     ));
//   };

//   return (
//     <div style={{ border: '1px solid #ddd', margin: '10px', padding: '20px', borderRadius: '8px', backgroundColor: '#fff' }}>
//       <h2>My Tasks</h2>
      
//       <AddTaskForm onAddTask={addTask} /> {/* Render the form */}
      
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {tasks.map(task => (
//           <TaskItem 
//             key={task.id} 
//             task={task} 
//             onToggleComplete={toggleTaskCompletion} 
//           /> 
        
//         ))}
//       </ul>
      
//       {/* Conditional rendering: Show message if no tasks */}
//       {tasks.length === 0 && <p>No tasks yet! Add one above.</p>}
//     </div>
//   );
// }

// export default TaskListContainer;



// In TaskListContainer:

// We initialize tasks state with a few sample tasks.
// addTask function creates a new task object and adds it to the tasks array using the spread syntax for immutability.
// toggleTaskCompletion function maps over the tasks array. If a task's ID matches, it creates a new task object with the completed status flipped; otherwise, it returns the original task.
// We render the AddTaskForm and pass the addTask function as a prop.
// We use the map method to iterate over the tasks array and render a TaskItem for each task, passing the task data and the toggleTaskCompletion function as props.
// We use the logical && operator for conditional rendering: if tasks.length is 0, a "No tasks yet!" message is displayed.

// Enhancing the Task List Application

import React, { useState } from 'react';
import TaskItem from './TaskItem';
import AddTaskForm from './AddTaskForm';

function TaskListContainer() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React basics', completed: true },
    { id: 2, text: 'Build a component', completed: false },
    { id: 3, text: 'Understand state and props', completed: false },
  ]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText, // Fixed: used taskText argument instead of null
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // New delete handler
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div style={{ border: '1px solid #ddd', margin: '10px', padding: '20px', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h2>My Tasks</h2>
      
      <AddTaskForm onAddTask={addTask} />
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onToggleComplete={toggleTaskCompletion}
            onDelete={deleteTask} // Pass the handler down
          />
        ))}
      </ul>
      
      {tasks.length === 0 && <p>No tasks yet! Add one above.</p>}
    </div>
  );
}

export default TaskListContainer;;

