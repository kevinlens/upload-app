import Modal from '../DocumentUpload/Modal/Modal';
import styles from './App.module.css';
import DocumentUpload from '../DocumentUpload/DocumentUpload';

function App() {
  return (
    <div>
      <Modal>
        <DocumentUpload />
      </Modal>
    </div>
  );
}

export default App;
