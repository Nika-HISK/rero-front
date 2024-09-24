'use client';
import React, { useEffect, useState } from 'react';
import BackgroundAlbumCard from '../BackgroundAlbumCard/BackgroundAlbumCard';
import { BackgroundAlbumCardPropsInterface } from '../BackgroundAlbumCard/interfaces/background-album-card-props.interface';
import TopAlbumNavigation from '../TopAlbumNavigation/TopAlbumNavigation';
import styles from './TopAlbumLibrary.module.scss';
import HeaderInput from '@/app/Components/HeaderInput/HeaderInput';
import BaseApi from '@/app/api/BaseApi';

const TopAlbumLibrary = () => {
  const [albumData, setAlbumData] = useState<
    BackgroundAlbumCardPropsInterface[]
  >([]);
  const [filteredAlbums, setFilteredAlbums] = useState<
    BackgroundAlbumCardPropsInterface[]
  >([]);
  const [, setSearchTerm] = useState('');

  useEffect(() => {
    BaseApi.get(`/album`).then((response) => {
      setAlbumData(response.data);
      setFilteredAlbums(response.data);
    });
  }, []);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value.trim() === '') {
      setFilteredAlbums(albumData);
    } else {
      const lowercasedValue = value.toLowerCase();
      const filtered = albumData.filter(
        (album) =>
          album.name.toLowerCase().includes(lowercasedValue) ||
          album.artist?.artistName.toLowerCase().includes(lowercasedValue),
      );
      setFilteredAlbums(filtered);
    }
  };

  return (
    <>
      <div className={styles.WrapperContainer}>
        <div className={styles.wrapCont}>
          <TopAlbumNavigation />
        </div>
        <div className={styles.searchWrapper}>
          <HeaderInput
            onSearch={handleSearch}
            results={filteredAlbums.map((album) => album.name)}
          />
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
