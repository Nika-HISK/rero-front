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
        {songs.slice(0, 3).map((music) => (
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

      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <TopAlbumsNavigationAnchore />
        </div>
        {albumData.map((album) => (
          <AlbumRow
            id={album.id}
            key={album.id}
            albumName={album.albumName}
            duration={album.duration}
            cover={album.cover}
            music={album.music}
            artistName={album.artistName}
          />
        ))}
      </div>
    </>
  );
};

export default TopHits;
