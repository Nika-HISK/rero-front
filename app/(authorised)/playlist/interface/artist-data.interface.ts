import { SongObject } from './song-object.interface';

export interface artistData {
  id: number;
  playlistName: string;
  musics: SongObject[];
}
