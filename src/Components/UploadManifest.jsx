/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './UploadManifest.module.css';
import Button from './Button';
import fileImage from '../assets/file.png';
import FileLoading from './FileLoading';
import Separator from './Separator';

const uploadButton = {
  backgroundColor: '#234066',
  color: 'white',
  padding: '6px 20px',
  width: '180px',
  margin: 'auto',
};

const UploadManifest = () => {
  const [manifest, setManifest] = useState({ name: '', size: '' });

  const onDrop = useCallback((acceptedFiles) => {
    setManifest(prevState => ({
      ...prevState,
      name: acceptedFiles[0].name,
      size: acceptedFiles[0].size
    }));
    console.log('33', manifest);
  }, [manifest]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div>
      <h3 style={{ fontSize: '12px', marginBottom: '10px' }}>
        Select a manifest that you'd like to import
      </h3>
      <div className={styles.box}>
        <div className={styles.dragdrop}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <>
                <img width='20' height='20' src={fileImage} />
                <p style={{marginTop: '5px'}} >
                  Drag & Drop Here Or <b>Browse</b>
                </p>
              </>
            )}
          </div>
        </div>
        <div className='m-auto' {...getRootProps()}>
          <input {...getInputProps()} />
          <Button buttonStyle={uploadButton} {...getInputProps()}>
            Upload Manifest
          </Button>
        </div>
      </div>
      <Separator full={true} />
      <FileLoading manifest={manifest}/>
      <Separator full={true} />
    </div>
  );
};

export default UploadManifest;
