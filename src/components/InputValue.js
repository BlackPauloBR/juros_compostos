import React, { useState, useEffect } from 'react';
import { TYPE_VALIDATION, messegerValidation } from '../helpers/helpers.js';
//TYPE_VALIDATION[3] : "PositiveFloat" || "Float" || "PositiveInterge"
export default function InputValue({ handleChangeInput, description, type }) {
  const [minValue, setMinValue] = useState(Number.MIN_SAFE_INTEGER);
  const [maxValue, setMaxValue] = useState(Number.MAX_SAFE_INTEGER);
  const [msgError, setMsgError] = useState(messegerValidation(type, ''));
  useEffect(() => {
    if (type === TYPE_VALIDATION[0] || type === TYPE_VALIDATION[2]) {
      if (type === TYPE_VALIDATION[2]) {
        setMaxValue(500);
      }
      setMinValue(0);
    }
  }, [type]);

  const handleChange = (event) => {
    const msg = messegerValidation(type, event.target.value);
    setMsgError(msg);
    if (msg !== '') return handleChangeInput(type, '');

    handleChangeInput(type, event.target.value);
  };

  return (
    <ul style={{ padding: '10px', minWidth: '50px' }}>
      <li>
        <div className="row">
          <div className="input-field col s15">
            <input
              id="value"
              type="number"
              className="validate"
              onChange={handleChange}
              min={minValue}
              max={maxValue}
              style={{ minWidth: '168px' }}
            />
            <label className="active" htmlFor="value">
              {description}
            </label>
          </div>
        </div>
      </li>
      <li>
        {!!msgError && (
          <span
            className="card yellow darken-1"
            style={{
              display: 'flex',
              flexDirection: 'flex-start',
              backgroundColor: 'yellow',
              width: '180px',
              height: '50px',
              justifyContent: 'left',
              textAlign: 'center',
              textJustify: 'center',
              padding: '3px',
            }}
          >
            {msgError}
          </span>
        )}
      </li>
    </ul>
  );
}
