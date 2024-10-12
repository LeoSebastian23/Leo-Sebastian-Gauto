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
    <div className="my-2">
        {/* <h5 className="text-center">Ver como</h5> */}
      <Form.Range
        min={1}
        max={4}
        value={gridValue}
        onChange={handleGridChange}
        style={{ margin: '0 auto', width: '100%' }} // Ajusta el ancho del slider
      />
    </div>
  );
};

export default SelectorGrid;
