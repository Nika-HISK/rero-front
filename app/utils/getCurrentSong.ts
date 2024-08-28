import songs from '../Components/SmallPlayer/Utils/dummy-musics';

export const getCurrentSong = (currentSongIndex: number | null) => {
  if (
    currentSongIndex !== null &&
    currentSongIndex >= 0 &&
    currentSongIndex < songs.length
  ) {
    return songs[currentSongIndex];
  }

  return {
    audioSrc: '',
    src: '',
    music: '',
    artist: '',
  };
};
