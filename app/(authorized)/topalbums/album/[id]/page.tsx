'use client';
import { useParams } from 'next/navigation';
import { AlbumCardDatas } from '../../components/TopAlbumLibrary/dummyAlbums/album-dummy-data';
import TopAlbumsNavigationAnchore from '../../components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import { AlbumPagePropsInterface } from '../interfaces/album-music-props.interface';
import styles from '../page.module.scss';
import MusicRow from '@/app/Components/MusicRow/MusicRow';
import BaseApi from '@/app/api/BaseApi';
import { useEffect, useState } from 'react';
import { AlbumHitsPropsInterface } from '../interfaces/album-hits-props.interface';

const AlbumMusic = () => {
  const [musicData, setMusicData] = useState<AlbumHitsPropsInterface[]>([]);
  const { id } = useParams();
  const albumId = musicData.find((album) => album.id === +id);
  if (albumId === undefined) return null;

  BaseApi.get('/album').then((response) => {
    setMusicData(response.data);
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <TopAlbumsNavigationAnchore />
      </div>
      <div className={styles.container}>
        {musicData?.map((data) => {
          return (
            <MusicRow
              id={data.id}
              key={data.id}
              albumName={data.albumName}
              duration={data.duration}
              cover={data.cover}
              music={data.music}
              artistName={data.artistName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AlbumMusic;
