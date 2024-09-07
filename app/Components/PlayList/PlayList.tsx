'use client';

import Image from 'next/image';
import { useState } from 'react';
import AlbumRowTime from '../AlbumRowTime/AlbumRowTime';
import styles from './PlayList.module.scss';
import { PlayListPropsinterface } from './playlistPropsInterface/playlist-propsInterface';
import { SongObject } from '@/app/(authorised)/playlist/dummyData/dummyData';

const PlayList = ({
  playlistName,
  artistPhoto,
  isActive,
  artists,
}: PlayListPropsinterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [artistsData, setArtistsData] = useState<SongObject[]>([...artists]);

  const onChangeToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.playListWrapper}>
        <div className={styles.wrapper}>
          <Image
            className={styles.artistCover}
            src={artistPhoto}
            alt={`${playlistName} cover`}
            width={53}
            height={53}
          />
          <span className={styles.playlistName}>{playlistName}</span>
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
            {artistsData.map((artist: SongObject, index: number) => (
              <AlbumRowTime
                artistData={artist}
                index={index}
                key={index + 1}
                artistDataArray={artistsData}
                filter={(artistsData: SongObject[]) =>
                  setArtistsData(artistsData)
                }
                isActive={isActive}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayList;
