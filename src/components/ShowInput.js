import React from 'react';
import InputValue from './InputValue';
import { TYPE_VALIDATION } from '../helpers/helpers.js';
//TYPE_VALIDATION[3] : "PositiveFloat" || "Float" || "PositiveInterge"
export default function ShowInput({ handleInputChange }) {
  const handleInputValue = (type, value) => {
    const data = { type, value };
    handleInputChange(data);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <InputValue
        handleChangeInput={handleInputValue}
        description="Capital Inicial:"
        type={TYPE_VALIDATION[0]}
      />
      <InputValue
        handleChangeInput={handleInputValue}
        description="% dos Juros:"
        type={TYPE_VALIDATION[1]}
      />
      <InputValue
        handleChangeInput={handleInputValue}
        description="Período em meses:"
        type={TYPE_VALIDATION[2]}
      />
    </div>
  );
}
