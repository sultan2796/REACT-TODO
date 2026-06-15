
import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import FilterButtons from './components/FilterButtons';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';

function App() {
  
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  
  const getFilteredTodos = () => {
    if (filter === 'active') return todos.filter(todo => !todo.completed);
    if (filter === 'completed') return todos.filter(todo => todo.completed);
    return todos;
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="App">
      <h1>Todo App</h1>


      <TodoInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTodo={addTodo}
      />

      <FilterButtons setFilter={setFilter} />

      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />

      <TodoStats todos={todos} />
    </div>
  );
}

export default App;