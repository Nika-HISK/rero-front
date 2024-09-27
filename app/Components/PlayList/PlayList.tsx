'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AlbumRowTime from '../AlbumRowTime/AlbumRowTime';
import styles from './PlayList.module.scss';
import { PlayListPropsinterface } from './interface/playlist-props.interface';
import { Song } from '../SmallPlayer/interfaces/song-props.interface';
import { useRecoilState } from 'recoil';
import { SongsState, audioPlayerState } from '@/app/Atoms/states';
import BaseApi from '@/app/api/BaseApi';
import MusicRow from '../MusicRow/MusicRow';

const PlayList = ({
  playlistName,
  isActive,
  playlistId,
  onClick,
}: PlayListPropsinterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [artistsData, setArtistsData] = useState<Song[]>([]);
  const [songs, setSongs] = useRecoilState(SongsState);
  const [currentSong, setCurrentSong] = useRecoilState(audioPlayerState);

  useEffect(() => {
    BaseApi.get('user/me').then((response) => {
      setArtistsData(response.data.playlists[0].musics);
    });
  }, []);

  const onChangeToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDelete = (id: number) => {
    setArtistsData((prevArtistData) =>
      prevArtistData.filter((item) => item.id !== id),
    );
  };

  const handlePlayClick = async (id: number) => {
    try {
      await BaseApi.post(`/listeners/${id}`);
      setSongs(artistsData);
    } catch (error) {}

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
              <MusicRow
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
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayList;
