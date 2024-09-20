import { MusicInterface } from './music-props.interface';

export interface AlbumInterface {
  id: number;
  name: string;
  releaseDate: string;
  cover: string;
  artistId: number;
  deletedAt: string | null;
  musics?: MusicInterface[];
}
