import { AlbumHitsPropsInterface } from './album-hits-props.interface';

export interface AlbumPagePropsInterface {
  id: number;
  albumName: string;
  artistName: string;
  musics?: AlbumHitsPropsInterface[];
  duration: string;
  cover?: string;
}
