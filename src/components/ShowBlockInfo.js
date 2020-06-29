import React from 'react';
import BlockInfo from './BlockInfo';

export default function ShowBlockInfo({ arrayMontado }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyItems: 'center',
        justifyContent: 'left',
      }}
    >
      {arrayMontado.map((item, index) => {
        if (index > 0) {
          const { id } = item;
          return <BlockInfo key={id} item={item}></BlockInfo>;
        }
        return null;
      })}
    </div>
  );
}
