import { SongObject } from '@/app/(authorized)/playlist/dummyData/dummyData';

export interface AlbumRowTimePropsInterface {
  isActive: boolean;
  index: number;
  artistData: SongObject;
  artistDataArray: SongObject[];
  filter: (data: SongObject[]) => void;
  src: string;
}
