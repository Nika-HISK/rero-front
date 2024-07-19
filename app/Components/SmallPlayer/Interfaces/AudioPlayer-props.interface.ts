export interface ProgressBarsProps {
  currentTime: number;
  duration: number;
  onProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTenSecondsBack: () => void;
  progressRef: React.RefObject<HTMLInputElement>;
  ipadProgressRef: React.RefObject<HTMLInputElement>;
}

export interface PlayerProps {
  playing: boolean;
  currentTime: number;
  duration: number;
  progressRef: React.RefObject<HTMLInputElement>;
  ipadProgressRef: React.RefObject<HTMLInputElement>;
  onProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTenSecondsBack: () => void;
  onVolumeDown: () => void;
  onVolumeUp: () => void;
  onPreviousSong: () => void;
  onNextSong: () => void;
  onPlayMusic: () => void;
}

export interface MusicPhotoProps {
  src: string;
  music: string;
  artist: string;
}

export interface InputRangeProps {
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  progressRef: React.RefObject<HTMLInputElement>;
}
