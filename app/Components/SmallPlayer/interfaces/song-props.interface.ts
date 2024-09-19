export interface Artist {
  id: number;
  artistName: string;
  artistPhoto: string;
  biography: string;
}

export interface Album {
  id: number;
  name: string;
  releaseDate: string;
  albumCover: string;
  artistId: number;
  deletedAt: string | null;
  musics?: Song[];
}

export interface Song {
  id: number;
  name: string;
  musicAudio: string;
  coverImage: string;
  duration: string;
  albumId: number;
  artistId: number;
  artist: Artist;
  album: Album;
}

export interface SongPropsInterface {
  songs: Song[];
}
