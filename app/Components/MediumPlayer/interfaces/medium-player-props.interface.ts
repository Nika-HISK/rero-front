import { SongPropsInterface } from '../../SmallPlayer/interfaces/song-props.interface';
import { AtomAudioPlayerPropsInterface } from '@/app/Atoms/interfaces/audio-player.props.interface';

export interface MediumPlayerPropsInterface extends SongPropsInterface {
  audioPlayer: AtomAudioPlayerPropsInterface;
  playMusic: () => void;
  toggleLoop: () => void;
  toggleShuffle?: () => void;
  handleNextSong: () => void;
  handlePreviousSong: () => void;
  handleVolumeDown: () => void;
  handleVolumeUp: () => void;
  isPlaying: boolean;
  handleProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  progressRef: React.RefObject<HTMLInputElement>;
  mute: () => void;
}
