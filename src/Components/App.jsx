import Modal from './Modal';
import styles from './App.module.css';
import DocumentUpload from './DocumentUpload';

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
