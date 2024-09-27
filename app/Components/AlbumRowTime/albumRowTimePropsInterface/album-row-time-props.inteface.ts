import { SongObject } from '../../PlayList/interface/song-props.interface';
import { Song } from '../../SmallPlayer/interfaces/song-props.interface';

export interface AlbumRowTimePropsInterface {
  isActive: boolean;
  index: number;
  artistData: Song;
  artistDataArray: Song[];
  src: string;
  musicId: number;
  playlistId: number;
  setArtistData: (id: number) => void;
  musicAudio: string;
  isPlaying: boolean;
  onClick: () => void;
}
