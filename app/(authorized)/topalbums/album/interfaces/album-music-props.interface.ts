import { AlbumHitsPropsInterface } from './album-hits-props.interface';

export interface AlbumPagePropsInterface {
  id: number;
  albumName: string;
  artistName: string;
  albumHits?: AlbumHitsPropsInterface[];
  duration: string;
  cover: string;
  music: string;
}
