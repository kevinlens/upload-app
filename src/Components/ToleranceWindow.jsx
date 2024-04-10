import React from 'react';
import { useState } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import styles from './ToleranceWindow.module.css';
const ToleranceWindow = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <h3 className={styles.toleranceHeader}>Tolerance Window:</h3>
      <div className='flex align-items-center text-xs'>
        <div className={styles.toggleButton}>
          <InputSwitch
            style={{ transform: 'scale(0.8)' }}
            checked={checked}
            onChange={(e) => setChecked(e.value)}
            pt={{
              slider: {
                style: {
                  backgroundColor: '#234066',
                },
              },
            }}
          />
          {checked ? (
            <p style={{ color: '#253d6b' }}>Toggle ON</p>
          ) : (
            <p>Toggle OFF</p>
          )}
        </div>
        <div className={styles.separator}></div>
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
        <p className='pl-2' style={{ color: '#253d6b' }}>
          Select Tolerance Level
        </p>
      </div>
    </div>
  );
};

export default ToleranceWindow;
