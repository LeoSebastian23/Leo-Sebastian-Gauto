import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SelectorGrid = ({ onChange }) => {
  const [gridValue, setGridValue] = useState(4); // Valor inicial para 4 fotos por fila

  const handleGridChange = (event) => {
    const value = event.target.value;
    setGridValue(value);
    onChange(value); // Llama a la función para actualizar el grid en la galería
  };

  return (
    <div className="selector-grid-container">
    <Form.Range
      min={1}
      max={4}
      value={gridValue}
      onChange={handleGridChange}
      className="custom-range-slider"
    />
    <div className="range-indicators">
      <span className={gridValue === 1 ? 'active' : ''}></span>
      <span className={gridValue === 2 ? 'active' : ''}></span>
      <span className={gridValue === 3 ? 'active' : ''}></span>
      <span className={gridValue === 4 ? 'active' : ''}></span>
    </div>
  </div>
  );
};

export default SelectorGrid;


