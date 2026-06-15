
import React from 'react';

function FilterButtons({ setFilter }) {
  return (
    <div className="filters">
      <button onClick={() => setFilter('all')}>Hamısı</button>
      <button onClick={() => setFilter('active')}>Aktiv</button>
      <button onClick={() => setFilter('completed')}>Tamamlanan</button>
    </div>
  );
}

export default FilterButtons;