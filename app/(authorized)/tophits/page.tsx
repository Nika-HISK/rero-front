'use client';

import { useRecoilState } from 'recoil';
import TopAlbumsNavigationAnchore from '../topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import MusicBox from './components/MusicBox/MusicBox';
import styles from './page.module.scss';
import { albumData } from './top-hits-album-data/top-hits-album-data';
import { audioPlayerState } from '@/app/Atoms/states';
import AlbumRow from '@/app/Components/AlbumRow/AlbumRow';
import songs from '@/app/Components/SmallPlayer/Utils/dummy-musics';
import { useEffect } from 'react';
import axios from 'axios';
import BaseApi from '@/app/api/BaseApi';

const TopHits = () => {
  const [currentSong, setCurrentSong] = useRecoilState(audioPlayerState);

  const handlePlayClick = (id: number) => {
    setCurrentSong((prevState) => ({
      ...prevState,
      currentSongId: id,
    }));
  };

  // useEffect(() => {
  //   axios
  //     .get(BaseApi)
  //     .then((response) => {
  //       const fetchedSongs = response.data.map((post: any) => ({
  //         id: post.id,
  //         artist: `Artist ${post.id}`,
  //         music: post.title,
  //         src: post.src,
  //         audioSrc: `${post.id}.mp3`,
  //       }));
  //       setSongs(fetchedSongs);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching music data:', error);
  //     });
  // }, []);
  return (
    <>
      <div className={styles.wrapper}>
        {songs.map((music) => (
          <MusicBox
            id={music.id}
            key={music.id}
            artistName={music.artist}
            musicName={music.music}
            cover={music.src}
            musicSrc={music.audioSrc}
            isPlaying={currentSong.currentSongId === music.id}
            onClick={() => handlePlayClick(music.id)}
          />
        ))}
      </div>
      <div className={styles.container}>
        <TopAlbumsNavigationAnchore />
      </div>
      <div className={styles.mainContainer}>
        {albumData.map((album) => (
          <AlbumRow
            key={album.albumName}
            albumName={album.albumName}
            duration={album.duration}
          />
        ))}
      </div>
    </>
  );
};

export default TopHits;
