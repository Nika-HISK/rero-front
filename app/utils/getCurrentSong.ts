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
    musicAudio: '',
    duration: '',
    artist: { id: 0, artistName: '', artistPhoto: '', biography: '' },
    albumId: 0,
    artistId: 0,
    album: {
      id: 0,
      name: '',
      releaseDate: '',
      albumCover: '',
      artistId: 0,
      deletedAt: null,
    },
  };

  return music ?? defaultMusic;
};
