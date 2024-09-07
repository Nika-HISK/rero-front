import { SongObject } from '@/app/(authorised)/playlist/dummyData/dummyData';

export interface PlayListPropsinterface {
  playlistName: string;
  artistPhoto: string;
  musicName?: string;
  isActive: boolean;
  artists: SongObject[];
  setActive?: () => void;
}
