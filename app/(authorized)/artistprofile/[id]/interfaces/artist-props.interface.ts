import { AlbumDataPropsInterface } from './album-data-props.interface';
import { RowMusicDataInterface } from './row-music-props.interface';

export interface ArtistPropsInterface {
  id: number;
  artistName: string;
  artistPhoto: string;
  biography: string;
  relesed: string;
  musics: RowMusicDataInterface[];
  albums: AlbumDataPropsInterface[];
}
