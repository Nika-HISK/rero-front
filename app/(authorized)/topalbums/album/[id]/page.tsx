'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import TopAlbumsNavigationAnchore from '../../components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import { AlbumPagePropsInterface } from '../interfaces/album-music-props.interface';
import styles from '../page.module.scss';
import MusicRow from '@/app/Components/MusicRow/MusicRow';
import BaseApi from '@/app/api/BaseApi';
import { MusicInterface } from '@/app/(authorized)/tophits/interfaces/music-props.interface';
import { useRecoilState } from 'recoil';
import { audioPlayerState } from '@/app/Atoms/states';

const AlbumMusic = () => {
  const [musicData, setMusicData] = useState<AlbumPagePropsInterface>();

  const { id } = useParams();

  useEffect(() => {
    BaseApi.get(`/album/${id}`).then((response) => {
      setMusicData(response.data);
    });
  }, [id]);

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
      <div className={styles.navigation}>
        <TopAlbumsNavigationAnchore />
      </div>
      <div className={styles.container}>
        {musicData &&
          musicData.musics.map((data) => (
            <MusicRow
              id={data.id}
              key={data.id}
              albumName={musicData.name}
              duration={data.duration}
              coverImage={data.coverImage}
              music={data.name}
              artistName={musicData.artist?.artistName}
              musicAudio={data.musicAudio}
              isPlaying={currentSong.currentSongId === data.id}
              onClick={() => handlePlayClick(data.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default AlbumMusic;
