'use client';

import { useState } from 'react';
import Button from '../Button/Button';
import Typhography from '../Typhography/Typhography';
import styles from './PlaylistPopup.module.scss';
import { ButtonMode } from '@/app/Enums/ButtonMode.enum';
import { ButtonType } from '@/app/Enums/ButtonType.enum';
import { TyphographyEnum } from '@/app/Enums/Typhography.enum';

const PlaylistPopup = () => {
  const [value, setValue] = useState('');

  return (
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
            />
          </div>
          <div className={styles.button}>
            {value.length > 0 ? (
              <Button
                mode={ButtonMode.Fill}
                type={ButtonType.Text}
                title="Confirm"
              />
            ) : (
              <Button
                mode={ButtonMode.Fill}
                type={ButtonType.Text}
                title="Confirm"
                disabled
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPopup;
