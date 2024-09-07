import { SongObject } from '@/app/(authorized)/playlist/dummyData/dummyData';

export interface PlayListPropsinterface {
  playlistName: string;
  artistPhoto: string;
  musicName?: string;
  isActive: boolean;
  artists: SongObject[];
  setActive?: () => void;
}
