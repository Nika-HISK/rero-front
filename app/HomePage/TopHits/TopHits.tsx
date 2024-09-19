'use client';

import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './TopHits.module.scss';
import { TopHitsAlbums } from './top-hits-data/top-hits-data';
import MusicRow from '@/app/Components/MusicRow/MusicRow';
import { useRecoilState } from 'recoil';
import { audioPlayerState } from '@/app/Atoms/states';
import BaseApi from '@/app/api/BaseApi';
import { MusicInterface } from '@/app/(authorized)/tophits/interfaces/music-props.interface';

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
    <div className={styles.wrapper}>
      <SectionTitle title="Top Hits" link="/tophits" />
      <div className={styles.container}>
        {data.map((music) => (
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

export default TopHits;
