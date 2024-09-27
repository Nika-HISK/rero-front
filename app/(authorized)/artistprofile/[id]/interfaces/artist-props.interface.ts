import { AlbumDataPropsInterface } from './album-data-props.interface';
import { Song } from '@/app/Components/SmallPlayer/interfaces/song-props.interface';

export interface ArtistPropsInterface {
  id?: number;
  artistName?: string;
  artistPhoto?: string;
  biography?: string;
  relesed?: string;
  musics?: Song[];
  albums?: AlbumDataPropsInterface[];
}
