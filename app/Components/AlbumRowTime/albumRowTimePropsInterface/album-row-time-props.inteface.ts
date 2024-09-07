import { SongObject } from '@/app/(authorised)/playlist/dummyData/dummyData';

export interface AlbumRowTimePropsInterface {
  isActive: boolean;
  index: number;
  artistData: SongObject;
  artistDataArray: SongObject[];
  filter: (data: SongObject[]) => void;
}
