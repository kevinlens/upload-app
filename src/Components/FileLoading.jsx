import React from 'react';
import fileImage from '../assets/file.png';
import { Progress } from 'rsuite';
const FileLoading = ({ manifest }) => {
  const fileSizeBytes = manifest.size; // bytes
  const fileSizeMB = (fileSizeBytes / (1024 * 1024)).toFixed(2);
  return (
    <div className='flex align-items-center text-xs px-2'>
      <img width='25' height='25' src={fileImage} />
      <div className='w-full pl-2'>
        <div className='flex justify-content-between align-items-center w-full'>
          <p style={{color: '#c1c1c1'}} className='mt-0 mb-1'>
            {manifest.name ? manifest.name : 'WN-DAL-0726-NH20166.csv'}
          </p>
          <p className='mt-0 mb-1'>{manifest.size ? fileSizeMB : '5.7' }MB</p>
        </div>
        <Progress.Line
          style={{ padding: '0 0 0 0', width: 'full' }}
          strokeWidth={3}
          percent={1.5}
          strokeColor='#ffc107'
          showInfo={false}
        />
      </div>
    </div>
  );
};

export default FileLoading;
