'use client';
import React, { useEffect, useState } from 'react';
import BackgroundAlbumCard from '../BackgroundAlbumCard/BackgroundAlbumCard';
import { BackgroundAlbumCardPropsInterface } from '../BackgroundAlbumCard/interfaces/background-album-card-props.interface';
import TopAlbumNavigation from '../TopAlbumNavigation/TopAlbumNavigation';
import styles from './TopAlbumLibrary.module.scss';
import HeaderInput from '@/app/Components/HeaderInput/HeaderInput';
import BaseApi from '@/app/api/BaseApi';

const TopAlbumLibrary = () => {
  const [, setAlbumData] = useState<BackgroundAlbumCardPropsInterface[]>([]);
  const [filteredAlbums, setFilteredAlbums] = useState<
    BackgroundAlbumCardPropsInterface[]
  >([]);

  useEffect(() => {
    BaseApi.get(`/album`).then((response) => {
      setAlbumData(response.data);
      setFilteredAlbums(response.data);
    });
  }, []);

  return (
    <>
      <div className={styles.WrapperContainer}>
        <div className={styles.wrapCont}>
          <TopAlbumNavigation />
        </div>
        <div className={styles.searchWrapper}>
          <HeaderInput results={filteredAlbums.map((album) => album.name)} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.wrap}>
          {filteredAlbums.map((album) => (
            <BackgroundAlbumCard
              key={album.id}
              name={album.name}
              artistName={album.artist?.artistName}
              releaseDate={album.releaseDate}
              songCount={album.musics.length}
              cover={album?.cover}
              id={album.id}
              artist={album.artist}
              musics={album.musics}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopAlbumLibrary;
