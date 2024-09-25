'use client';
import { useEffect, useState } from 'react';
import styles from './Editpopup.module.scss';
import Button from '@/app/Components/Button/Button';
import { PlaylistPopUpProps } from '@/app/Components/PlaylistPopup/interface/playlistPopup.interface';
import Typhography from '@/app/Components/Typhography/Typhography';
import { ButtonMode } from '@/app/Enums/ButtonMode.enum';
import { ButtonType } from '@/app/Enums/ButtonType.enum';
import { TyphographyEnum } from '@/app/Enums/Typhography.enum';

const Editpopup = (props: PlaylistPopUpProps) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value) {
      props.e(value);
    }
  }, [value, props.e, props]);

  useEffect(() => {
    document.body.classList.add(styles.freeze);
    return () => {
      document.body.classList.remove(styles.freeze);
    };
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.userInterfaces}>
          <div className={styles.playlistInfo}>
            <div className={styles.playlistInput}>
              <Typhography type={TyphographyEnum.BodyThree}>
                Playlist Name
              </Typhography>
              <input
                type="text"
                className={styles.input}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setValue(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              <Button
                mode={ButtonMode.Cancel}
                type={ButtonType.Text}
                title="Cancel"
                onClick={props.onCancel}
              />
            </div>
            <div className={styles.button}>
              <Button
                mode={ButtonMode.Fill}
                type={ButtonType.Text}
                title="Confirm"
                onClick={props.onConfirm}
                disabled={value.length === 0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editpopup;
