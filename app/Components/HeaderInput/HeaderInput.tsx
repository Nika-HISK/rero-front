import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, useEffect, useCallback } from 'react';
import styles from './HeaderInput.module.scss';
import {
  HeaderInputSearchInterface,
  InputAlbumPropsInterface,
  InputArtistInterface,
  InputMusicInterface,
} from './interfaces/input-props.interface';
import BaseApi from '@/app/api/BaseApi';

const HeaderInput = (props: HeaderInputSearchInterface) => {
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [data, setData] = useState<{
    albums: InputAlbumPropsInterface[];
    artists: InputArtistInterface[];
    musics: InputMusicInterface[];
  }>({ albums: [], artists: [], musics: [] });

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

  const handleMusicClick = (musicId: string) => {
    setIsActive(false);
    router.push(`/musics/${musicId}`);
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
                <li
                  key={music.id}
                  className={styles.musicLiStyle}
                  onClick={() => handleMusicClick(music.id)}
                >
                  <Image src="/search.png" alt="music" width={20} height={20} />
                  <p className={styles.musicParagraphStyle}>
                    <span className={styles.musicStyle}>Music: </span>
                    {music.name}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderInput;
