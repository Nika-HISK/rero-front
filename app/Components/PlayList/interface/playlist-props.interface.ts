import { SongObject } from './song-props.interface';

export interface PlayListPropsinterface {
  playlistName: string;
  artistName: string;
  artistPhoto: string;
  musicName: string;
  isActive: boolean;
  artists: SongObject[];
  setActive?: () => void;
  loop: boolean;
  toggleLoop: () => void;
  playlistId: number;
  onClick: () => void;
}
