import { SongPropsInterface } from './song-props.interface';

export interface SmallPlayerPropsInterface extends SongPropsInterface {
  audioRef: React.RefObject<HTMLAudioElement>;
  audioPlayer: any;
  playMusic: () => void;
  handleProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTenSecondsBack: () => void;
  handleNextSong: () => void;
  handlePreviousSong: () => void;
  handleVolumeDown: () => void;
  handleVolumeUp: () => void;
  isPlaying: boolean;
  progressRef: React.RefObject<HTMLInputElement>;
  open: boolean;
  setOpen: (open: boolean) => void;
}
