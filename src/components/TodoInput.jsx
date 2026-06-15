
import React from 'react';

function TodoInput({ inputValue, setInputValue, addTodo }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
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
  );
}

export default TodoInput;