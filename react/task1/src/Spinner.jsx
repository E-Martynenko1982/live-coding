import React from 'react';

const Spinner = ({ size }) => {
  return (
    <div>
      <span className='spinner' style={{ width: size, height: size }}></span>
    </div>
  );
}

export default Spinner;
