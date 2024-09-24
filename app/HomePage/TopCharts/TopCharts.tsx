'use client';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './TopCharts.module.scss';
import { MusicInterface } from '@/app/(authorized)/tophits/interfaces/music-props.interface';
import { audioPlayerState } from '@/app/Atoms/states';
import MusicRow from '@/app/Components/MusicRow/MusicRow';
import BaseApi from '@/app/api/BaseApi';

const TopCharts = () => {
  const [currentSong, setCurrentSong] = useRecoilState(audioPlayerState);
  const [data, setData] = useState<MusicInterface[]>([]);

  useEffect(() => {
    BaseApi.get('/listeners').then((response) => {
      setData(response.data);
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
      <SectionTitle title="Top Charts" link="/topcharts" />
      <div className={styles.container}>
        {data.slice(0, 6).map((music) => (
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
