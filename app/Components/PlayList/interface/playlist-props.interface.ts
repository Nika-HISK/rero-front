import { SongObject } from './song-props.interface';

export interface PlayListPropsinterface {
  playlistName: string;
  isActive: boolean;
  artists: SongObject[];
  setActive?: () => void;
  playlistId: number;
  musicAudio: string;
  isPlaying: boolean;
  onClick: () => void;
}
