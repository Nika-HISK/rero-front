import { SongObject } from '@/app/Components/PlayList/interface/song-props.interface';

export interface PlaylistData {
  id: number;
  playlistName: string;
  musics: SongObject[];
  musicAudio: string;
}
