'use client';

import Image from 'next/image';
import styles from './PlayList.module.scss';
import { useState } from 'react';
import { PlayListPropsinterface } from './playlistPropsInterface/playlist-propsInterface';
import AlbumRowTime from '../AlbumRowTime/AlbumRowTime';
import { PlayListData } from './play-list-dummy-data/play-list-dummy-data';

const PlayList = (props: PlayListPropsinterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onChangeToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.playListWrapper}>
        <div className={styles.wrapper}>
          <Image
            className={styles.artistCover}
            src={props.artistPhoto}
            alt={`${props.playlistName} cover`}
            width={53}
            height={53}
          />
          <span className={styles.playlistName}>{props.playlistName}</span>
          <Image
            onClick={onChangeToggle}
            src={isOpen ? '/playlist/down.svg' : '/playlist/up.svg'}
            alt="Toggle"
            width={40}
            height={40}
          />
        </div>
        <div
          className={`${styles.afterOpen} ${!isOpen ? styles.collapsed : ''}`}
        >
          <div className={styles.images}>
            <Image
              src="/playlist/looper.svg"
              alt="Looper"
              width={24}
              height={24}
            />
            <Image
              src="/playlist/shuffle.svg"
              alt="Shuffle"
              width={24}
              height={24}
            />
          </div>
          <div className={styles.mapContainer}>
            {PlayListData.map((album, index) => (
              <AlbumRowTime
                key={index}
                src={album.src}
                musicName={album.musicName}
                artistName={album.artistName}
                albumName={album.albumName}
                createTime={album.createTime}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayList;
