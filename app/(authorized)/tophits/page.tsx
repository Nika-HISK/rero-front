'use client';

import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import TopAlbumsNavigationAnchore from '../topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import MusicBox from './components/MusicBox/MusicBox';
import styles from './page.module.scss';
import { audioPlayerState } from '@/app/Atoms/states';
import MusicRow from '@/app/Components/MusicRow/MusicRow';
import BaseApi from '@/app/api/BaseApi';
import { MusicInterface } from './interfaces/music-props.interface';

const TopHits = () => {
  const [currentSong, setCurrentSong] = useRecoilState(audioPlayerState);
  const [data, setData] = useState<MusicInterface[]>([]);

  useEffect(() => {
    BaseApi.get('/music').then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, []);
  console.log(data);

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
            id={music.id}
            key={music.id}
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
            id={music.id}
            key={music?.album?.id}
            albumName={music?.album?.name}
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
