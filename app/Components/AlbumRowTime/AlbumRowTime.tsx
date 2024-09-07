import Image from 'next/image';
import { useState } from 'react';
import Button from '../Button/Button';
import ConfirmPopup from '../ConfirmPopup/ConfirmPopup';
import styles from './AlbumRowTIme.module.scss';
import { AlbumRowTimePropsInterface } from './albumRowTimePropsInterface/album-row-time-props.inteface';
import { ButtonMode } from '@/app/Enums/ButtonMode.enum';
import { ButtonType } from '@/app/Enums/ButtonType.enum';

const AlbumRowTime = ({
  isActive,
  index: i,
  artistData,
  artistDataArray,
  filter,
}: AlbumRowTimePropsInterface) => {
  const [isConfirmPopupVisible, setIsConfirmPopupVisible] = useState(false);

  const handleDelete = () => {
    setIsConfirmPopupVisible(true);
  };

  const handleConfirmDelete = () => {
    const updatedArtitstData = artistDataArray.filter(
      (_, index: number) => !(index === i),
    );
    filter(updatedArtitstData);
    setIsConfirmPopupVisible(false);
  };

  const handleCancelDelete = () => {
    setIsConfirmPopupVisible(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.musicImage}>
          <Image src={artistData.src} alt="MusicCover" width={52} height={52} />
        </div>
        <div className={styles.musicInfo}>
          <span className={styles.musicName}>{artistData.musicName}</span>
          <span className={styles.artistName}>{artistData.artistName}</span>
        </div>
      </div>
      <div className={styles.albumNameContainer}>
        <span>{artistData.albumName}</span>
      </div>
      <div>
        <span className={styles.createTime}>{artistData.createTime}</span>
      </div>
      {isActive && (
        <div className={styles.garbageWrapper} onClick={handleDelete}>
          <Button
            mode={ButtonMode.Delete}
            type={ButtonType.IconOnly}
            icon="/icons/group.svg"
          />
        </div>
      )}
      {isConfirmPopupVisible && (
        <ConfirmPopup
          message="Are you sure ?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default AlbumRowTime;
