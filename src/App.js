import React, { useState, useEffect } from 'react';
import { montador_array } from './helpers/helpers.js';
import ShowInput from './components/ShowInput.js';
import ShowBlockInfo from './components/ShowBlockInfo.js';

export default function App() {
  const [arrayMontado, setArrayMontado] = useState([]);
  const [headerInfo, setHeaderInfo] = useState({
    capital_inicial: '',
    taxa_juros: '',
    periodo: '',
  });

  useEffect(() => {
    const newArray = montador_array(headerInfo);
    setArrayMontado(newArray);
  }, [headerInfo]);

  const handleInput = (inputInfo) => {
    const { type, value } = inputInfo;
    let newHeader = Object.assign({}, headerInfo);
    //colocar um sinal de + antes da variavel, transforma string em number.
    newHeader[type] = +value;
    setHeaderInfo(newHeader);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Calculadora Juros Compostos</h2>
      <ShowInput handleInputChange={handleInput} />
      <ShowBlockInfo arrayMontado={arrayMontado} />
    </div>
  );
}
