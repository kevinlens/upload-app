import React from 'react';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import styles from './TestingCenter.module.css';
const TestingCenter = ({ testingNumber }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: 'Client', code: 'Cli' },
  ];

  return (
    <div className='card flex align-items-center pt-2'>
      <p className={styles.header}>Testing Center {testingNumber}</p>
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel='name'
        placeholder='Select Client'
        style={{ height: '33px', width: '118px' }}
        pt={{
          // root: { className: 'w-4 h-3rem text-xs' },
          input: {
            style: {
              fontSize: '11px',
              paddingTop: '8px',
            },
          },
          trigger: {
            style: {
              width: '33px',
              paddingRight: '20px',
              marginRight: '-8px'
            },
          },
        }}
      />
      <svg
        width='16'
        height='16'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
        style={{ marginLeft: '12px' }}
      >
        <script xmlns='' />
        <path d='M32 256a224 224 0 1 0 448 0A224 224 0 1 0 32 256zm480 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM240 400V260.8l-61.3-92-8.9-13.3 26.6-17.8 8.9 13.3 64 96 2.7 4V256 400v16H240V400z' />
        <script xmlns='' id='bw-fido2-page-script' />
      </svg>
    </div>
  );
};

export default TestingCenter;
