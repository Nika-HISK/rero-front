import { AlbumInterface } from './album-props.interface';
import { ArtistInterface } from './artist-props.interface';

export interface MusicInterface {
  id: number;
  name: string;
  musicAudio: string;
  coverImage: string;
  duration: string;
  albumId: number;
  artistId: number;
  artist?: ArtistInterface;
  album?: AlbumInterface;
}
