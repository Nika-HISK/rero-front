import React, { useEffect } from 'react';
import styles from './ConfirmPopup.module.scss';
import { ConfirmPopupProps } from './interface/confirmpipup.interface';

const ConfirmPopup = ({ message, onConfirm, onCancel }: ConfirmPopupProps) => {
  useEffect(() => {
    document.body.classList.add(styles.freeze);
    return () => {
      document.body.classList.remove(styles.freeze);
    };
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttons}>
          <button className={styles.cancelButton} onClick={onCancel}>
            No
          </button>
          <button className={styles.confirmButton} onClick={onConfirm}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
