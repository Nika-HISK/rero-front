import { atom } from 'recoil';
import { AtomAudioPlayerPropsInterface } from './interfaces/audio-player.props.interface';
import {
  Song,
  SongPropsInterface,
} from '../Components/SmallPlayer/interfaces/song-props.interface';

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
