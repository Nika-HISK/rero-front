export interface PlayerPropsInterface {
  playing: boolean;
  currentTime: number;
  duration: number;
  progressRef: React.RefObject<HTMLInputElement>;
  onProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTenSecondsBack: () => void;
  onVolumeDown: () => void;
  onVolumeUp: () => void;
  onPreviousSong: () => void;
  onNextSong: () => void;
  onPlayMusic: () => void;
}
