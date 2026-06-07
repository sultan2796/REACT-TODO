import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  
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

    const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const toggleComplete = (id) =>{
    setTodos(todos.map(todo =>
      todo.id === i ? {...todo,completed: !todo.completed} : todo
    ));
  };

  const getFilteredTodos = () => {
    if (filter === "active"){
      return todos.filter(todo => !todo.completed);
    }else if(filter === "completed"){
      return todos.filter(todo => todo.completed);
    }
    return todos;
  };

    const filteredTodos = getFilteredTodos();

  return (
    <div className="App">
      <h1>Todo App</h1>
      
      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Yeni todo əlavə edin..."
        />
        <button onClick={addTodo}>Əlavə Et</button>
      </div>

    
      <div className="filters">
        <button onClick={() => setFilter('all')}>Hamısı</button>
        <button onClick={() => setFilter('active')}>Aktiv</button>
        <button onClick={() => setFilter('completed')}>Tamamlanan</button>
      </div>

      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <p>Heç bir todo yoxdur.</p>
        ) : (
          filteredTodos.map(todo => (
            <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              <span>{todo.text}</span>
              <button onClick={() => deleteTodo(todo.id)}>Sil</button>
            </div>
          ))
        )}
      </div>

      <div className="stats">
        <p>Cəmi: {todos.length} | 
           Aktiv: {todos.filter(t => !t.completed).length} | 
           Tamamlanan: {todos.filter(t => t.completed).length}
        </p>
      </div>
    </div>
  );

}

export default App;
