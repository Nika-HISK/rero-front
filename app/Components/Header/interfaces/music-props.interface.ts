export interface ArtistPagePropsInterface {
  id: number;
  artistName: string;
  artistPhoto: string;
  biography: string;
  albums: AlbumPropsInterface[];
  musics: MusicPropsInterface[];
}

export interface AlbumPropsInterface {
  id: number;
  name: string;
  releaseDate: string;
  albumCover: string;
  artistId: number;
  musics: MusicPropsInterface[];
}

export interface MusicPropsInterface {
  id: number;
  name: string;
  musicAudio: string;
  coverImage: string;
  duration: string;
  albumId: number;
  artistId: number;
  artist: ArtistSummaryPropsInterface;
  album: AlbumSummaryPropsInterface;
}

export interface ArtistSummaryPropsInterface {
  id: number;
  artistName: string;
  artistPhoto: string;
  biography: string;
}

export interface AlbumSummaryPropsInterface {
  id: number;
  name: string;
  releaseDate: string;
  albumCover: string;
  artistId: number;
}
