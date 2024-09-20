'use client';

import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import TopAlbumsNavigationAnchore from '../topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import MusicBox from './components/MusicBox/MusicBox';
import { MusicInterface } from './interfaces/music-props.interface';
import styles from './page.module.scss';
import { audioPlayerState } from '@/app/Atoms/states';
import MusicRow from '@/app/Components/MusicRow/MusicRow';
import BaseApi from '@/app/api/BaseApi';

const TopHits = () => {
  const [currentSong, setCurrentSong] = useRecoilState(audioPlayerState);
  const [data, setData] = useState<MusicInterface[]>([]);

  useEffect(() => {
    BaseApi.get('/music').then((response) => {
      setData(response.data);
    });
  }, []);

  const handlePlayClick = (id: number) => {
    setCurrentSong((prevState) => ({
      ...prevState,
      currentSongId: id,
    }));
  };

  return (
    <>
      <div className={styles.wrapper}>
        {data.slice(0, 3).map((music) => (
          <MusicBox
            key={music.id} // Unique key for MusicBox
            id={music.id}
            artistName={music.artist?.artistName || ''}
            musicName={music.name}
            cover={music.coverImage}
            musicSrc={music.musicAudio}
            isPlaying={currentSong.currentSongId === music.id}
            onClick={() => handlePlayClick(music.id)}
          />
        ))}
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <TopAlbumsNavigationAnchore />
        </div>
        {data.map((music) => (
          <MusicRow
            key={music.id} // Use unique key for MusicRow
            id={music.id}
            albumName={music.album?.name}
            duration={music.duration}
            coverImage={music.coverImage}
            music={music.name}
            artistName={music.artist?.artistName || ''}
            musicAudio={music.musicAudio}
            isPlaying={currentSong.currentSongId === music.id}
            onClick={() => handlePlayClick(music.id)}
          />
        ))}
      </div>
    </>
  );
};

export default TopHits;
