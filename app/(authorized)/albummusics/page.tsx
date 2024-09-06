'use client';
import { useParams } from 'next/navigation';
import { AlbumCardDatas } from '../topalbums/components/TopAlbumLibrary/dummyAlbums/album-dummy-data';
import TopAlbumsNavigationAnchore from '../topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import { AlbumMusicPropsInterface } from './interfaces/album-music-props.interface';
import styles from './page.module.scss';
import MusicRow from '@/app/Components/MusicRow/MusicRow';

const AlbumMusic = () => {
  const { id } = useParams();

  const artistParam = AlbumCardDatas.find((album) => album.id === +id);
  if (artistParam === undefined) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <TopAlbumsNavigationAnchore />
      </div>
      <div className={styles.container}>
        {artistParam.albumHits?.map((data: AlbumMusicPropsInterface) => {
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
