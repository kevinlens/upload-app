import styles from './Modal.module.css';
const Modal = ({ children }) => {
  return (
    <div className={styles.modal}>
      <img
        style={{borderRadius: '16px'}}
        width='34'
        height='34'
        src='https://img.icons8.com/ios-filled/100/close-window.png'
        alt='close-window'
      />
      {children}
    </div>
  );
};

export default Modal;
