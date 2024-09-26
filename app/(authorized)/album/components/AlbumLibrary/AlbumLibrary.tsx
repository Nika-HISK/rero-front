'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './AlbumLibrary.module.scss';
import BackgroundAlbumCard from '@/app/(authorized)/topalbums/components/BackgroundAlbumCard/BackgroundAlbumCard';
import { BackgroundAlbumCardPropsInterface } from '@/app/(authorized)/topalbums/components/BackgroundAlbumCard/interfaces/background-album-card-props.interface';
import BaseApi from '@/app/api/BaseApi';

const AlbumLibrary = () => {
  const [albumData, setAlbumData] = useState<
    BackgroundAlbumCardPropsInterface[]
  >([]);
  const [, setcount] = useState(0);
  const { id } = useParams();
  
  useEffect(() => {
    BaseApi.get(`/artist/${id}`).then((response) => {
      setAlbumData(response.data.albums);
      setcount(response.data.musics?.length || 0);
    });
  }, [id]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrap}>
          {albumData?.map((album) => (
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

export default AlbumLibrary;
