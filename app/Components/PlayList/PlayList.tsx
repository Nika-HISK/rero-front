'use client';
import Image from 'next/image';
import { useState } from 'react';
import AlbumRowTime from '../AlbumRowTime/AlbumRowTime';
import styles from './PlayList.module.scss';
import { PlayListPropsinterface } from './interface/playlist-props.interface';

const PlayList = ({
  playlistName,
  isActive,
  artists,
  playlistId,
  onClick,
}: PlayListPropsinterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [artistsData, setArtistsData] = useState(artists);

  const onChangeToggle = () => {
    setIsOpen((prev) => !prev);
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
