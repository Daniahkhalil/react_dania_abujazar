import React from 'react';

const Bedroom = ({ height, width, color, name }) => (
  <div style={{ height, width, backgroundColor: color }}>
    <h2>{name}</h2>
   
  </div>
);

export default Bedroom;
