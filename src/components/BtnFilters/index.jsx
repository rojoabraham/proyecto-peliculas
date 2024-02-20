import { useState } from 'react';

const BtnFilters = ({ id, label, name, tipo, miOnClick }) => {
    
  const handleClick = () => {
    miOnClick(label)
  };

  return (
    <div className="btn-group">
        <button
          type="button"
          className={`btn 
          ${tipo === name ? 'btn-primary' : 'btn-secondary'}`}
          onClick={handleClick}
        >
          {name}
        </button>
    </div>
  );
}

export default BtnFilters;