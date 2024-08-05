import { atom } from 'recoil';
import { AudioPlayerPropsInterface } from './interfaces/audio-player.props.interface';

export const audioPlayerState = atom<AudioPlayerPropsInterface>({
  key: 'audioPlayerState',
  default: {
    currentTime: 0,
    duration: 0,
    currentSongIndex: 0,
    loop: false,
    shuffle: false,
  },
});
