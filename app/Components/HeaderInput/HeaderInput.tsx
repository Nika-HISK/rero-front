import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { Song } from '../SmallPlayer/interfaces/song-props.interface';
import styles from './HeaderInput.module.scss';
import MusicListItem from './MusicListItem/MusicListItem';
import {
  HeaderInputSearchInterface,
  InputAlbumPropsInterface,
  InputArtistInterface,
} from './interfaces/input-props.interface';
import { SongsState, audioPlayerState } from '@/app/Atoms/states';
import BaseApi from '@/app/api/BaseApi';

const HeaderInput = (props: HeaderInputSearchInterface) => {
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [data, setData] = useState<{
    albums: InputAlbumPropsInterface[];
    artists: InputArtistInterface[];
    musics: Song[];
  }>({ albums: [], artists: [], musics: [] });
  const [currentSong, setCurrentSong] = useRecoilState(audioPlayerState);
  const [, setSongs] = useRecoilState(SongsState);

  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsActive(event.target.value.length > 0);
  };

  const fetchData = useCallback(async () => {
    if (!inputValue) return;
    try {
      const response = await BaseApi.get(`/search?query=${inputValue}`);
      setData({
        albums: response.data.albums || [],
        artists: response.data.artists || [],
        musics: response.data.musics || [],
      });
    } catch (error) {
      alert('Error fetching data');
    }
  }, [inputValue]);

  useEffect(() => {
    fetchData();
  }, [inputValue, fetchData]);

  const handleAlbumClick = (albumId: string) => {
    setIsActive(false);
    router.push(`/topalbums/album/${albumId}`);
    setInputValue('');
  };

  const handleArtistClick = (artistId: string) => {
    setIsActive(false);
    router.push(`/artistprofile/${artistId}`);
    setInputValue('');
  };

  const handleMusicClick = (id: number) => {
    setIsActive(false);

    try {
      BaseApi.post(`/listeners/${id}`);
      setSongs(data.musics);
    } catch (error) {
      alert(error);
    }

    setCurrentSong((prevState) => ({
      ...prevState,
      currentSongId: id,
    }));

    setInputValue('');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchIconAndInputFieldWrapper}>
        <Image
          className={styles.searchStyle}
          src={'/search.png'}
          alt="search"
          width={24}
          height={24}
        />
        <div className={styles.inputAndDropDownWrapper}>
          <input
            type="text"
            value={inputValue}
            placeholder={props.placeholder}
            onChange={handleInputChange}
            className={styles.input}
          />
          {isActive && (
            <ul className={styles.ulWrapper}>
              {data.albums.map((album) => (
                <li
                  key={album.id}
                  className={styles.albumLiStyle}
                  onClick={() => handleAlbumClick(album.id)}
                >
                  <Image src="/search.png" alt="album" width={20} height={20} />
                  <p className={styles.albumParagraphStyle}>
                    <span className={styles.albumStyle}>Album: </span>
                    {album.name}
                  </p>
                </li>
              ))}

              {data.artists.map((artist) => (
                <li
                  key={artist.id}
                  className={styles.artistLiStyle}
                  onClick={() => handleArtistClick(artist.id)}
                >
                  <Image
                    src="/search.png"
                    alt="artist"
                    width={20}
                    height={20}
                  />
                  <p className={styles.artistParagraphStyle}>
                    <span className={styles.artistStyle}>Artist: </span>
                    {artist.artistName}
                  </p>
                </li>
              ))}
              {data.musics.map((music) => (
                <MusicListItem
                  key={music.id}
                  id={music.id}
                  music={music.name}
                  musicAudio={music.musicAudio}
                  isPlaying={currentSong.currentSongId === music.id}
                  onClick={() => handleMusicClick(music.id)}
                  albumName={music.album.name}
                  duration={music.duration}
                  coverImage={music.coverImage}
                  artistName={music.artist.artistName}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderInput;
