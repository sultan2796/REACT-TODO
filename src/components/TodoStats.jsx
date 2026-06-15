
import React from 'react';

function TodoStats({ todos }) {
  const total = todos.length;
  const active = todos.filter(t => !t.completed).length;
  const completed = todos.filter(t => t.completed).length;

  return (
    <div className="stats">
      <p>
        Cəmi: {total} | Aktiv: {active} | Tamamlanan: {completed}
      </p>
    </div>
  );
}

export default TodoStats;