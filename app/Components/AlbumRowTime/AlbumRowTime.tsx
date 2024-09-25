import Image from 'next/image';
import { useState } from 'react';
import Button from '../Button/Button';
import ConfirmPopup from '../ConfirmPopup/ConfirmPopup';
import styles from './AlbumRowTIme.module.scss';
import { AlbumRowTimePropsInterface } from './albumRowTimePropsInterface/album-row-time-props.inteface';
import { ButtonMode } from '@/app/Enums/ButtonMode.enum';
import { ButtonType } from '@/app/Enums/ButtonType.enum';
import BaseApi from '@/app/api/BaseApi';

const AlbumRowTime = ({
  musicId,
  playlistId,
  isActive,
  artistData,
  setArtistData,
}: AlbumRowTimePropsInterface) => {
  const [isConfirmPopupVisible, setIsConfirmPopupVisible] = useState(false);
  const [id, setId] = useState<number>();

  const handleDelete = () => {
    setIsConfirmPopupVisible(true);
  };

  const onDeleteClick = (id: number) => {
    setId(id);
    handleConfirmDelete();
  };

  const handleConfirmDelete = () => {
    if (id !== undefined) {
      try {
        BaseApi.delete(`/playlist/${playlistId}/add/${id}`);
        setArtistData(id);
      } catch (error) {
        alert('Couldnot fetch data');
      }
    }
    setIsConfirmPopupVisible(false);
  };

  const handleCancelDelete = () => {
    setIsConfirmPopupVisible(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.musicImage}>
          <Image
            src={artistData.coverImage}
            alt="MusicCover"
            width={52}
            height={52}
          />
        </div>
        <div className={styles.musicInfo}>
          <span className={styles.musicName}>{artistData.name}</span>
          <span className={styles.artistName}>
            {artistData.artist.artistName}
          </span>
        </div>
      </div>
      <div className={styles.albumNameContainer}>
        <span>{artistData.album.name}</span>
      </div>
      <div>
        <span className={styles.createTime}>{artistData.duration}</span>
      </div>
      {isActive && (
        <div className={styles.garbageWrapper} onClick={handleDelete}>
          <Button
            onClick={() => onDeleteClick(musicId)}
            mode={ButtonMode.Delete}
            type={ButtonType.IconOnly}
            icon="/icons/trash.svg"
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
