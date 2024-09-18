'use client';
import React, { useEffect, useState } from 'react';
import BackgroundAlbumCard from '../BackgroundAlbumCard/BackgroundAlbumCard';
import { BackgroundAlbumCardPropsInterface } from '../BackgroundAlbumCard/interfaces/background-album-card-props.interface';
import styles from './TopAlbumLibrary.module.scss';
import BaseApi from '@/app/api/BaseApi';

const TopAlbumLibrary = () => {
  const [albumData, setAlbumData] = useState<
    BackgroundAlbumCardPropsInterface[]
  >([]);
  const [, setcount] = useState(0);

  useEffect(() => {
    BaseApi.get(`/album`).then((response) => {
      setAlbumData(response.data);
      setcount(response.data.musics?.length || 0);
    });
  }, []);

  
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrap}>
          {albumData.map((album) => {
            return (
              <BackgroundAlbumCard
                key={album.id}
                name={album.name}
                artistName={album.artist.artistName}
                releaseDate={album.releaseDate}
                songCount={album.musics.length}
                albumCover={album?.albumCover}
                id={album.id}
                artist={album.artist}
                musics={album.musics}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopAlbumLibrary;
