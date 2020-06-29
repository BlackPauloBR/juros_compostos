import React from 'react';
import { formatNumber } from '../helpers/helpers.js';
export default function BlockInfo({ item }) {
  const { id, montante, diferenca, perc } = item;
  const newMontante = formatNumber(montante, 'moeda');
  const newDiferenca = formatNumber(diferenca, 'moeda');
  //let newPerc = formatNumber(perc, 'porcentagem');
  let newPerc = `${(perc * 100).toFixed(2)} %`;
  newPerc = newPerc.replace('.', ',');
  let corMontante = '#16a085';
  let corDiferenca = '#6ab04c';
  let corPerc = '#6ab04c';
  if (perc < 0) {
    corMontante = '#d35400';
    corDiferenca = '#e67e22';
    corPerc = '#f39c12';
  }

  return (
    <div
      className="z-depth-1"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        minWidth: '160px',
        minHeight: '100px',
        padding: '5px',
        margin: '10px',
        borderRadius: '10%',
      }}
    >
      <strong style={{ fontSize: '1.3rem' }}>{id}</strong>
      <ul style={{ margin: '15px' }}>
        <li>
          <strong style={{ color: corMontante }}>{newMontante}</strong>
        </li>
        <li>
          <strong style={{ color: corDiferenca }}>{newDiferenca}</strong>
        </li>
        <li style={{ color: corPerc }}> {newPerc}</li>
      </ul>
    </div>
  );
}
