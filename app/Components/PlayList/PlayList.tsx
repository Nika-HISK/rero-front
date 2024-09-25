'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AlbumRowTime from '../AlbumRowTime/AlbumRowTime';
import styles from './PlayList.module.scss';
import { PlayListPropsinterface } from './interface/playlist-props.interface';
import BaseApi from '@/app/api/BaseApi';

const PlayList = ({
  playlistName,
  isActive,
  artists,
  loop,
  playlistId,
  toggleLoop,
  onClick,
}: PlayListPropsinterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [artistsData, setArtistsData] = useState([...artists]);
  const [shuffle, setShuffle] = useState<boolean>(false);

  const onChangeToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    BaseApi.get('playlist');
  }, []);

  const onShuffle = () => {
    !shuffle ? BaseApi.get('/shuffle') : BaseApi.get('playlist');
    setShuffle(!shuffle);
  };

  const handleDelete = (id: number) => {
    setArtistsData((prevArtistData) =>
      prevArtistData.filter((item) => item.id !== id),
    );
  };

  return (
    <>
      <div className={styles.playListWrapper}>
        <div className={styles.wrapper}>
          <span className={styles.playlistName} onClick={onClick}>
            {playlistName}
          </span>
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
              src={'/playlist/shuffle.svg'}
              alt="Shuffle"
              width={24}
              height={24}
              onClick={onShuffle}
            />
          </div>
          <div className={styles.mapContainer}>
            {artistsData.map((artist) => (
              <AlbumRowTime
                setArtistData={handleDelete}
                src={artist.coverImage}
                artistData={artist}
                index={artist.id}
                key={artist.id}
                artistDataArray={artistsData}
                isActive={isActive}
                musicId={artist.id}
                playlistId={playlistId}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayList;
