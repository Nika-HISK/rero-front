'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import AlbumRowTime from '../AlbumRowTime/AlbumRowTime';
import styles from './PlayList.module.scss';
import { PlayListPropsinterface } from './playlistPropsInterface/playlist-propsInterface';
import { SongObject } from '@/app/(authorized)/playlist/dummyData/dummyData';
import BaseApi from '@/app/api/BaseApi';

const PlayList = ({
  playlistName,
  artistPhoto,
  isActive,
  artists,
  loop,
  toggleLoop,
}: PlayListPropsinterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [artistsData, setArtistsData] = useState<SongObject[]>([...artists]);
  const [shuffle, setShuffle] = useState<boolean>(false);

  const onChangeToggle = () => {
    setIsOpen((prev) => !prev);
  };
  
  useEffect (() => {
    BaseApi.get('playlist')
  },[])


  const onShuffle = () => {
    !shuffle ? BaseApi.get('/shuffle') : BaseApi.get('playlist')
    setShuffle(!shuffle)
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
              onClick={toggleLoop}
              src={loop ? '/icons/activeloop.svg' : '/icons/normalloop.svg'}
              alt="loop"
              width={28}
              height={28}
            />
            <Image
              src={shuffle ? '/icons/activeShuffle.svg' : '/playlist/shuffle.svg'}
              alt="Shuffle"
              width={24}
              height={24}
              onClick={onShuffle}
            />
          </div>
          <div className={styles.mapContainer}>
            {artistsData.map((artist: SongObject, index: number) => (
              <AlbumRowTime
                src={artist.src}
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
