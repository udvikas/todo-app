"use client"
import React, { useState } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';

const Home = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, details = '') => {
    const newTodo = {
      id: Date.now(),
      text,
      details,
      completed: false,
      date: new Date().toLocaleDateString(), // Add the current date
    };
    setTodos([...todos, newTodo]);
  };
  
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default Home;
