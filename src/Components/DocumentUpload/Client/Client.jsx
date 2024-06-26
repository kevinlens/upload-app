import React from 'react';
import TestingCenter from '../TestingCenter/TestingCenter';
import RadioButtonComponent from '../Buttons/RadioButtonComponent';

const Client = () => {
  return (
    <div>
      <RadioButtonComponent
        choices={['Single', 'Multiple']}
        defaultValue='Multiple'
      >
        <h3>Client:</h3>
      </RadioButtonComponent>
      {Array.from({ length: 4 }, (_, i) => (
        <TestingCenter key={i} testingNumber={i + 1} />
      ))}
    </div>
  );
};

export default Client;
