import { Song } from '../Components/SmallPlayer/interfaces/song-props.interface';

export const getCurrentSong = (
  currentSongId: number | null,
  songs: Song[],
): Song => {
  const music = songs?.find((song) => song.id === currentSongId);

  const defaultMusic: Song = {
    id: 0,
    coverImage: '',
    name: '',
    artist: '',
    musicAudio: '',
  };

  return music ?? defaultMusic;
};
