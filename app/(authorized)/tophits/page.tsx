'use client';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import TopAlbumsNavigationAnchore from '../topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import MusicBox from './components/MusicBox/MusicBox';
import { MusicInterface } from './interfaces/music-props.interface';
import styles from './page.module.scss';
import { SongsState, audioPlayerState } from '@/app/Atoms/states';
import MusicRow from '@/app/Components/MusicRow/MusicRow';
import BaseApi from '@/app/api/BaseApi';
import { Song } from '@/app/Components/SmallPlayer/interfaces/song-props.interface';

const TopHits = () => {
  const [currentSong, setCurrentSong] = useRecoilState(audioPlayerState);
  const [data, setData] = useState<Song[]>([]);
  const [filteredMusic, setFilteredMusic] = useState<MusicInterface[]>([]);
  const [, setSongs] = useRecoilState(SongsState);

  useEffect(() => {
    BaseApi.get('/music').then((response) => {
      setData(response.data);
      setFilteredMusic(response.data);
    });
  }, []);

  const handlePlayClick = async (id: number) => {
    try {
      await BaseApi.post(`/listeners/${id}`);
      setSongs(data);
    } catch (error) {
      alert(error);
    }

    setCurrentSong((prevState) => ({
      ...prevState,
      currentSongId: id,
    }));
  };

  return (
    <>
      <div className={styles.wrapper}>
        {filteredMusic.slice(0, 3).map((music) => (
          <MusicBox
            key={music.id}
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
        <div className={styles.contWrapper}>
          <div className={styles.container}>
            <TopAlbumsNavigationAnchore />
          </div>
        </div>
        {filteredMusic.slice(3, filteredMusic.length).map((music) => (
          <MusicRow
            key={music.id}
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
