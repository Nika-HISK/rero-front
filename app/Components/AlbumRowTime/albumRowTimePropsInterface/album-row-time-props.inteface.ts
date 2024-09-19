import { SongObject } from '@/app/(authorised)/playlist/interface/song-object.interface';

export interface AlbumRowTimePropsInterface {
  isActive: boolean;
  index: number;
  artistData: SongObject;
  artistDataArray: SongObject[];
  filter: (data: SongObject[]) => void;
  src: string;
}
