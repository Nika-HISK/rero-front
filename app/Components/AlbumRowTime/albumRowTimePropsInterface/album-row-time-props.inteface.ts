import { SongObject } from '../../PlayList/interface/song-props.interface';

export interface AlbumRowTimePropsInterface {
  isActive: boolean;
  index: number;
  artistData: SongObject;
  artistDataArray: SongObject[];
  src: string;
  musicId: number;
  playlistId: number;
  setArtistData: (id: number) => void;
}
