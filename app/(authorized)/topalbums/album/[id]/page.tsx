'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import TopAlbumsNavigationAnchore from '../../components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import { AlbumPagePropsInterface } from '../interfaces/album-music-props.interface';
import styles from '../page.module.scss';
import MusicRow from '@/app/Components/MusicRow/MusicRow';
import BaseApi from '@/app/api/BaseApi';

const AlbumMusic = () => {
  const [musicData, setMusicData] = useState<AlbumPagePropsInterface>();

  const { id } = useParams();

  useEffect(() => {
    BaseApi.get(`/album/${id}`).then((response) => {
      setMusicData(response.data);
    });
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <TopAlbumsNavigationAnchore />
      </div>
      <div className={styles.container}>
        {musicData &&
          musicData.musics.map((data) => {
            return (
              <MusicRow
                id={data.id}
                key={data.id}
                albumName={data.albumName}
                duration={data.duration}
                cover={data.cover}
                music={data.music}
                artistName={data.artist.artistName}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AlbumMusic;
