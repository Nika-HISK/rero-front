import { SongPropsInterface } from '../../SmallPlayer/interfaces/song-props.interface';
import { AtomAudioPlayerPropsInterface } from '@/app/Atoms/interfaces/audio-player.props.interface';

export interface MediumPlayerPropsInterface extends SongPropsInterface {
  audioRef: React.RefObject<HTMLAudioElement>;
  audioPlayer: AtomAudioPlayerPropsInterface;
  playMusic: () => void;
  toggleLoop: () => void;
  handleNextSong: () => void;
  handlePreviousSong: () => void;
  handleVolumeDown: () => void;
  handleVolumeUp: () => void;
  isPlaying: boolean;
  handleProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  progressRef: React.RefObject<HTMLInputElement>;
}
