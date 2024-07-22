import { atom } from 'recoil';

export const audioPlayerState = atom({
  key: 'audioPlayerState',
  default: {
    currentTime: 0,
    duration: 0,
    currentSongIndex: 0,
    loop: false,
    shuffle: false,
  },
});
