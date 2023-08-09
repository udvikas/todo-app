import React, { useState } from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handlePopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          toggleTodo(todo.id);
          setShowDetails(false);
          setShowPopup(false);
        }}
      />
      <span className="todo-text">{todo.text}</span>
      {todo.completed && !showPopup && (
        <button onClick={handlePopup}>View Task</button>
      )}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-popup" onClick={closePopup}>
              &times;
            </span>
            <h2>Task Details</h2>
            <p>Date: {todo.date}</p>
            <p>{todo.text}</p>
            <p>{todo.details}</p>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      )}
      {!showPopup && !todo.completed && (
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      )}
      {showDetails && <p className="todo-details">{todo.details}</p>}
    </div>
  );  
};

export default TodoItem;
