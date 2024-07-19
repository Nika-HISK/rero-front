import type { ButtonMode, ButtonType } from "../Enums/Enums";

export interface Button {
  title?: string;
  mode?: ButtonMode;
  disabled?: boolean;
  onClick?: () => void;
  icon?: string;
  type?: ButtonType;
}

export interface SongProps {
  songs: Song[];
}

export interface Song {
  src: string;
  music: string;
  artist: string;
  audioSrc: string;
}

export interface AdjustButtonProps {
  onVolumeDown: () => void;
  onVolumeUp: () => void;
  onPreviousSong: () => void;
  onNextSong: () => void;
  onPlayMusic: () => void;
  playing: boolean;
  customStyle: boolean;
}

export interface ProgressBarProps {
  currentTime: number;
  duration: number;
  progressRef: React.RefObject<HTMLInputElement>;
  handleProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loop: boolean;
  toggleLoop: () => void;
}
