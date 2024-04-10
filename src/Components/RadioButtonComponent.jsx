import React from 'react';
import { useState } from 'react';
import { RadioButton } from 'primereact/radiobutton';

const radioButtonSelected = {
  icon: {
    style: {
      backgroundColor: '#2a3f63',
    },
  },
  box: {
    style: {
      backgroundColor: '#fff',
      borderColor: '#2a3f63',
    },
  },
};
const radioButtonStyling = {
  box: {
    style: {
      borderColor: '#92918f',
    },
  },
};

const RadioButtonComponent = ({
  choices = ['Yes', 'No'],
  children,
  defaultValue = 'Yes',
}) => {
  const [decision, setDecision] = useState(defaultValue);

  return (
    <div>
      <div>
        <b>{children}</b>
        <div className='flex flex-wrap gap-3 pb-2 text-xs'>
          <div className='flex align-items-center'>
            <RadioButton
              inputId='ingredient1'
              name='pizza'
              value={choices[0]}
              onChange={(e) => setDecision(e.value)}
              checked={decision === choices[0]}
              pt={
                decision === choices[0]
                  ? radioButtonSelected
                  : radioButtonStyling
              }
            />
            <label htmlFor='ingredient1' className='ml-2'>
              {choices[0]}
            </label>
          </div>
          <div className='flex align-items-center'>
            <RadioButton
              inputId='ingredient2'
              name='pizza'
              value={choices[1]}
              onChange={(e) => setDecision(e.value)}
              checked={decision === choices[1]}
              pt={
                decision === choices[1]
                  ? radioButtonSelected
                  : radioButtonStyling
              }
            />
            <label htmlFor='ingredient2' className='ml-2'>
              {choices[1]}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioButtonComponent;
