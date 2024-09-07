'use client';
import { useParams } from 'next/navigation';
import { AlbumCardDatas } from '../../components/TopAlbumLibrary/dummyAlbums/album-dummy-data';
import TopAlbumsNavigationAnchore from '../../components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import { AlbumPagePropsInterface } from '../interfaces/album-music-props.interface';
import styles from '../page.module.scss';
import MusicRow from '@/app/Components/MusicRow/MusicRow';

const AlbumMusic = () => {
  const { id } = useParams();
  const albumParam = AlbumCardDatas.find((album) => album.id === +id);
  if (albumParam === undefined) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <TopAlbumsNavigationAnchore />
      </div>
      <div className={styles.container}>
        {albumParam.albumHits?.map((data: AlbumPagePropsInterface) => {
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
