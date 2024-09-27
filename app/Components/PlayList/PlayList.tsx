/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import PlayListMusic from '../PlaylistMusic/PlaylistMusic';
import { Song } from '../SmallPlayer/interfaces/song-props.interface';
import styles from './PlayList.module.scss';
import { PlayListPropsinterface } from './interface/playlist-props.interface';
import { SongsState, audioPlayerState } from '@/app/Atoms/states';
import BaseApi from '@/app/api/BaseApi';

const PlayList = ({
  playlistName,
  onClick,
  playlistId,
}: PlayListPropsinterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [artistsData, setArtistsData] = useState<Song[]>([]);
  const [, setSongs] = useRecoilState(SongsState);
  const [currentSong, setCurrentSong] = useRecoilState(audioPlayerState);

  useEffect(() => {
    BaseApi.get('user/me').then((response) => {
      setArtistsData(response.data.playlists[0].musics);
    });
  }, []);

  const onChangeToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handlePlayClick = async (id: number) => {
    try {
      await BaseApi.post(`/listeners/${id}`);
      setSongs(artistsData);
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
      <div className={styles.playListWrapper}>
        <div className={styles.wrapper}>
          <span className={styles.playlistName} onClick={onClick}>
            {playlistName}
          </span>
          <Image
            onClick={onChangeToggle}
            src={isOpen ? '/playlist/down.svg' : '/playlist/up.svg'}
            alt="Toggle"
            width={40}
            height={40}
          />
        </div>
        <div
          className={`${styles.afterOpen} ${!isOpen ? styles.collapsed : ''}`}
        >
          <div className={styles.mapContainer}>
            {artistsData.map((album) => (
              <PlayListMusic
                key={album.id}
                id={album.id}
                duration={album.duration}
                albumName={album.album?.name!}
                coverImage={album.coverImage}
                music={album.name}
                artistName={album.artist?.artistName!}
                musicAudio={album.musicAudio!}
                isPlaying={currentSong.currentSongId === album.id}
                onClick={() => handlePlayClick(album.id)}
                albumId={playlistId}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayList;
