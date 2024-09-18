export interface AlbumPagePropsInterface {
  id: number;
  name: string;
  releaseDate: string;
  musics: {
    id: number;
    name: string;
    musicAudio: string;
    coverImage: string;
    duration: string | null;
    albumId: number;
    artistId: number;
  }[];
  artist: {
    id: number;
    artistName: string;
    artistPhoto: string;
    biography: string;
  };
}
