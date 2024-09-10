'use client';

import React, { useEffect, useState } from 'react';
import BackgroundAlbumCard from '../BackgroundAlbumCard/BackgroundAlbumCard';
import styles from './TopAlbumLibrary.module.scss';
import BaseApi from '@/app/api/BaseApi';
import { BackgroundAlbumCardPropsInterface } from '../BackgroundAlbumCard/interfaces/background-album-card-props.interface';

const TopAlbumLibrary = () => {
  const [albumData, setAlbumData] = useState<
    BackgroundAlbumCardPropsInterface[]
  >([]);

  useEffect(() => {
    BaseApi.get(`/album`).then((response) => {
      setAlbumData(response.data);
    });
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrap}>
          {albumData.map((album, index) => (
            <BackgroundAlbumCard
              key={index}
              albumName={album.albumName}
              artistName={album.artistName}
              albumTime={album.albumTime}
              songCount={album.songCount}
              backgroundImage={album.backgroundImage}
              id={album.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopAlbumLibrary;
