import { atom } from 'recoil';
import { AtomAudioPlayerPropsInterface } from './interfaces/audio-player.props.interface';

export const audioPlayerState = atom<AtomAudioPlayerPropsInterface>({
  key: 'audioPlayerState',
  default: {
    currentTime: 0,
    duration: 0,
    currentSongIndex: null,
    loop: false,
    shuffle: false,
  },
});

// export const currentSongIndexState = atom<number | null>({
//   key: 'currentSongIndexState',
//   default: null,
// });
