import { Song } from '@/app/Components/SmallPlayer/interfaces/song-props.interface';
import { ArtistPropsInterface } from '../../../[id]/interfaces/artist-props.interface';
import { BackgroundAlbumCardPropsInterface } from '@/app/(authorized)/topalbums/components/BackgroundAlbumCard/interfaces/background-album-card-props.interface';

export interface RowAlbumSectionPropsInterface {
  albums: Song[];
}

interface AlbumsPropsInterface {
  artist?: ArtistPropsInterface;
  album?: BackgroundAlbumCardPropsInterface;
  name: string;
  artistName: string;
  coverImage: string;
  id: number;
  duration: string;
  albumName: string;
  musicAudio?: string;
  // Song?: Song[];
  // artistId?: number;
  // albumId?: number;
}
