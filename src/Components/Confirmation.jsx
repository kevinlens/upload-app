import React from 'react';
import Button from './Button';

const cancelButton = {
  backgroundColor: 'white',
  color: '#d5a358',
  padding: '10px 24px',
  border: '2px solid #d5a358',
  width: '185px',
  backgroundClip: 'padding-box',
};

const Confirmation = () => {
  return (
    <div>
      <h3 style={{fontSize: '13px'}}className='mb-3 mt-4'>
        Data in the import file is correct. Please press Continue to import.
      </h3>
      <div className='flex justify-content-center gap-4'>
        <Button>Continue Import</Button>
        <Button buttonStyle={cancelButton}>Cancel</Button>
      </div>
    </div>
  );
};

export default Confirmation;
