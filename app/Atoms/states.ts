import { atom } from 'recoil';
import { Song } from '../Components/SmallPlayer/interfaces/song-props.interface';
import { AtomAudioPlayerPropsInterface } from './interfaces/audio-player.props.interface';

export const audioPlayerState = atom<AtomAudioPlayerPropsInterface>({
  key: 'audioPlayerState',
  default: {
    currentTime: 0,
    duration: 0,
    currentSongId: null,
    loop: false,
    shuffle: false,
  },
});

export const SongsState = atom<Song[]>({
  key: 'endPoint',
  default: [],
});
