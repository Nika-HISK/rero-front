import { SongObject } from '@/app/(authorised)/playlist/interface/song-object.interface';

export interface PlayListPropsinterface {
  playlistName: string;
  isActive: boolean;
  artists: SongObject[];
  setActive?: () => void;
  loop: boolean;
  toggleLoop: () => void;
}
