import songs from '../Components/SmallPlayer/Utils/dummy-musics';

export const getCurrentSong = (currentSongIndex: number | null) => {
  const music = songs?.find?.((song) => song?.id === currentSongIndex);
  const defaultMusic = {
    audioSrc: '',
    src: '',
    music: '',
    artist: '',
  };

  return music ?? defaultMusic;
};
