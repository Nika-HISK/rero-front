'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import TopAlbumsNavigationAnchore from '../../components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import styles from '../page.module.scss';
import { SongsState, audioPlayerState } from '@/app/Atoms/states';
import MusicRow from '@/app/Components/MusicRow/MusicRow';
import { Song } from '@/app/Components/SmallPlayer/interfaces/song-props.interface';
import BaseApi from '@/app/api/BaseApi';

const AlbumMusic = () => {
  const [data, setData] = useState<Song[]>([]);

  const { id } = useParams();

  useEffect(() => {
    BaseApi.get(`/album/${id}`).then((response) => {
      setData(response.data.musics);
    });
  }, [id]);

  const [currentSong, setCurrentSong] = useRecoilState(audioPlayerState);
  const [, setSongs] = useRecoilState(SongsState);

  const handlePlayClick = async (songId: number) => {
    try {
      await BaseApi.post(`/listeners/${songId}`);
      setSongs(data);
    } catch (error) {
      alert(error);
    }

    setCurrentSong((prevState) => ({
      ...prevState,
      currentSongId: songId,
    }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <TopAlbumsNavigationAnchore />
      </div>
      <div className={styles.container}>
        {data.map((song) => (
          <MusicRow
            id={song.id}
            key={song.id}
            albumName={song.album?.name}
            duration={song.duration}
            coverImage={song.coverImage}
            music={song.name}
            artistName={song.artist?.artistName}
            musicAudio={song.musicAudio}
            isPlaying={currentSong.currentSongId === song.id}
            onClick={() => handlePlayClick(song.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumMusic;
