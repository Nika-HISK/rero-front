'use client';

import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Typhography from '../Typhography/Typhography';
import styles from './PlaylistPopup.module.scss';
import { PlaylistPopUpProps } from './interface/playlistPopup.interface';
import { ButtonMode } from '@/app/Enums/ButtonMode.enum';
import { ButtonType } from '@/app/Enums/ButtonType.enum';
import { TyphographyEnum } from '@/app/Enums/Typhography.enum';

const PlaylistPopup = ({
  onCancel,
  onConfirm,
  e: event,
}: PlaylistPopUpProps) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value) {
      event(value);
    }
  }, [value, event]);

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
            <Typhography type={TyphographyEnum.BodyNine}>
              Create Playlist
            </Typhography>
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
                onClick={onCancel}
              />
            </div>
            <div className={styles.button}>
              <Button
                mode={ButtonMode.Fill}
                type={ButtonType.Text}
                title="Confirm"
                onClick={onConfirm}
                disabled={value.length === 0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPopup;
