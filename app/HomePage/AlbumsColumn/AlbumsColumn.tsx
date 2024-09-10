'use client';
import React, { useEffect, useState } from 'react';
import BaseApi from '@/app/api/BaseApi';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './AlbumsColumn.module.scss';
import LongAlbumCover from './LongAlbumCover/LongAlbumCover';
import { LongAlbumCoverPropsInterface } from './LongAlbumCover/interfaces/long-album-cover-props.interface';

const AlbumsColumn = () => {
  const [albumsData, setAlbumData] = useState<LongAlbumCoverPropsInterface[]>(
    [],
  );

  // useEffect(() => {
  //   BaseApi.get('/')
  //     .then((response) => {
  //       setAlbumData(response.data);
  //     })
  // }, []);

  return (
    <div className={styles.wrapper}>
      <SectionTitle title={'Top Albums'} link={'/topalbums'} />
      <div className={styles.container}>
        {albumsData.slice(0, 3).map((album) => (
          <LongAlbumCover
            id={album.id}
            key={album.id}
            artistName={album.artistName}
            albumName={album.albumName}
            backgroundImage={album.backgroundImage}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumsColumn;
