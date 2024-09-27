'use client';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import TopAlbumsNavigationAnchore from '../topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import { MusicInterface } from '../tophits/interfaces/music-props.interface';
import styles from './page.module.scss';
import { audioPlayerState } from '@/app/Atoms/states';
import HeaderInput from '@/app/Components/HeaderInput/HeaderInput';
import MusicRow from '@/app/Components/MusicRow/MusicRow';
import BaseApi from '@/app/api/BaseApi';

const TopCharts = () => {
  const [currentSong, setCurrentSong] = useRecoilState(audioPlayerState);
  const [, setData] = useState<MusicInterface[]>([]);
  const [filteredMusic, setFilteredMusic] = useState<MusicInterface[]>([]);

  useEffect(() => {
    BaseApi.get('/listeners').then((response) => {
      setData(response.data);
      setFilteredMusic(response.data);
    });
  }, []);

  const handlePlayClick = async (id: number) => {
    try {
      await BaseApi.post(`/listeners/${id}`);
    } catch (error) {
      alert(error);
    }

    setCurrentSong((prevState) => ({
      ...prevState,
      currentSongId: id,
    }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.contWrapper}>
        <div className={styles.navigation}>
          <TopAlbumsNavigationAnchore />
        </div>
        <div className={styles.searchInput}>
          <HeaderInput results={filteredMusic.map((music) => music.name)} />
        </div>
      </div>
      <div className={styles.container}>
        {filteredMusic.map((music) => (
          <MusicRow
            id={music.id}
            key={music.id}
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
    </div>
  );
};

export default TopCharts;
