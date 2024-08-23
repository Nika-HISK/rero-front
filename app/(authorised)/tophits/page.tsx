'use client';

import TopAlbumsNavigationAnchore from '../topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import MusicBox from './components/MusicBox/MusicBox';
import { musicData } from './music-dummy-data/music-dummy-data';
import styles from './page.module.scss';
import { albumData } from './top-hits-album-data/top-hits-album-data';
import AlbumRow from '@/app/Components/AlbumRow/AlbumRow';

const TopHits = () => {
  return (
    <>
      <div className={styles.wrapper}>
        {musicData.map((music, index) => (
          <MusicBox
            key={index}
            artistName={music.artistName}
            musicName={music.musicName}
            cover={music.cover}
            musicSrc={music.musicSrc}
          />
        ))}
      </div>
      <div className={styles.container}>
        <TopAlbumsNavigationAnchore />
      </div>
      <div className={styles.mainContainer}>
        {albumData.map((album, index) => (
          <AlbumRow
            key={index}
            albumName={album.albumName}
            duration={album.duration}
          />
        ))}
      </div>
    </>
  );
};

export default TopHits;
