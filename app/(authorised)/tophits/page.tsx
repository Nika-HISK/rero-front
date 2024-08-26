'use client';

import { useRecoilState } from 'recoil';
import TopAlbumsNavigationAnchore from '../topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import MusicBox from './components/MusicBox/MusicBox';
import { musicData } from './music-dummy-data/music-dummy-data';
import styles from './page.module.scss';
import { albumData } from './top-hits-album-data/top-hits-album-data';
import { currentSongIndexState } from '@/app/Atoms/states';
import AlbumRow from '@/app/Components/AlbumRow/AlbumRow';

const TopHits = () => {
  const [currentSong, setCurrentSong] = useRecoilState(currentSongIndexState);

  const handlePlayClick = (id: number) => {
    setCurrentSong(id);
  };

  return (
    <>
      <div className={styles.wrapper}>
        {musicData.map((music) => (
          <MusicBox
            id={music.id}
            key={music.id}
            artistName={music.artist}
            musicName={music.music}
            cover={music.src}
            musicSrc={music.audioSrc}
            isPlaying={currentSong === music.id}
            onClick={() => handlePlayClick(music.id)}
          />
        ))}
      </div>
      <div className={styles.container}>
        <TopAlbumsNavigationAnchore />
      </div>
      <div className={styles.mainContainer}>
        {albumData.map((album) => (
          <AlbumRow
            key={album.albumName}
            albumName={album.albumName}
            duration={album.duration}
          />
        ))}
      </div>
    </>
  );
};

export default TopHits;
