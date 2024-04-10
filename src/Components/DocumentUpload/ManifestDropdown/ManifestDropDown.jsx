import React from 'react';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
const ManifestDropDown = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [{ name: 'Import Name', code: 'Doc' }];
  return (
    <div className='card'>
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel='name'
        placeholder='Select Import Name:'
        checkmark={true}
        highlightOnSelect={false}
        // className='w-6rem md:w-14rem'
        style={{ height: '30px', width: '26.5rem', color: 'red' }}
        pt={{
          input: {
            style: {
              fontSize: '11px',
              paddingTop: '8px',
              color: '#234066',
              fontWeight: 'bold',
            },
          },
          label: {
            style: {
              color: 'red',
            },
          },
        }}
      />
    </div>
  );
};

export default ManifestDropDown;
