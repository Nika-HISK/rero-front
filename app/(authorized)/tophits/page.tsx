'use client';

import { useRecoilState } from 'recoil';
import TopAlbumsNavigationAnchore from '../topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import MusicBox from './components/MusicBox/MusicBox';
import styles from './page.module.scss';
import { albumData } from './top-hits-album-data/top-hits-album-data';
import { audioPlayerState } from '@/app/Atoms/states';
import AlbumRow from '@/app/Components/AlbumRow/AlbumRow';
import songs from '@/app/Components/SmallPlayer/Utils/dummy-musics';

const TopHits = () => {
  const [currentSong, setCurrentSong] = useRecoilState(audioPlayerState);

  const handlePlayClick = (id: number) => {
    setCurrentSong((prevState) => ({
      ...prevState,
      currentSongId: id,
    }));
  };

  return (
    <>
      <div className={styles.wrapper}>
        {songs.map((music) => (
          <MusicBox
            id={music.id}
            key={music.id}
            artistName={music.artist}
            musicName={music.music}
            cover={music.src}
            musicSrc={music.audioSrc}
            isPlaying={currentSong.currentSongId === music.id}
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
