import { AlbumHitsPropsInterface } from './album-hits-props.interface';

export interface AlbumMusicPropsInterface {
  id: number;
  albumName: string;
  artistName: string;
  albumTime?: string;
  songCount?: string;
  backgroundImage?: string;
  albumHits?: AlbumHitsPropsInterface[];
  duration: string;
  cover: string;
  music: string;
}
