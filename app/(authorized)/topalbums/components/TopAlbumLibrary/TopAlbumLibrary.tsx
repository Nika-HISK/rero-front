'use client';

import React from 'react';
import BackgroundAlbumCard from '../BackgroundAlbumCard/BackgroundAlbumCard';
import styles from './TopAlbumLibrary.module.scss';
import { AlbumCardDatas } from './dummyAlbums/album-dummy-data';

const TopAlbumLibrary = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrap}>
          {AlbumCardDatas.map((album, index) => (
            <BackgroundAlbumCard
              key={index}
              albumName={album.albumName}
              artistName={album.artistName}
              albumTime={album.albumTime}
              songCount={album.songCount}
              backgroundImage={album.backgroundImage}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopAlbumLibrary;
