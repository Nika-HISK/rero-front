import { SongObject } from './song-props.interface';

export interface PlayListPropsinterface {
  playlistName: string;
  isActive: boolean;
  artists: SongObject[];
  setActive?: () => void;
  playlistId: number;
  onClick: () => void;
}
