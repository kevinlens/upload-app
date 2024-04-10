import React from 'react';
import styles from './DocumentUpload.module.css';
import ManifestDropDown from './ManifestDropDown';
import Separator from './Separator';
import UploadManifest from './UploadManifest';
import DataChecking from './DataChecking';
import ToleranceWindow from './ToleranceWindow';
import RadioButtonComponent from './RadioButtonComponent';
import Client from './Client';
import Confirmation from './Confirmation';
const DocumentUpload = () => {
  return (
    <form>
      <h1 className={styles.header}>
        <span>Document Upload</span>
      </h1>
      <div className={styles.innerPadding}>
        <div>
          <ManifestDropDown />
          <Separator />
          <UploadManifest />
          <Separator />
          <DataChecking>
            <h3 style={{ marginBottom: '-5px' }}>Elapse Data Checking:</h3>
            <p style={{ color: '#5a9875' }}>No Elapsed Dates!</p>
          </DataChecking>
          <Separator />
          <ToleranceWindow />
        </div>
        <div>
          <RadioButtonComponent>
            <h3 style={{marginTop: '0px'}}>Split schedule using social distancing?</h3>
          </RadioButtonComponent>
          <Separator />
          <DataChecking>
            <h3 style={{ marginBottom: '-5px'}}>Location Checking:</h3>
            <p style={{ color: '#5a9875' }}>All Available!</p>
          </DataChecking>
          <Separator />
          <Client />
        </div>
      </div>
      <div className='flex justify-content-center'>
        <Confirmation />
      </div>
    </form>
  );
};

export default DocumentUpload;
