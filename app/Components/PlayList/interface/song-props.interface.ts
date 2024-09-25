import { AlbumDataPropsInterface } from '@/app/(authorized)/artistprofile/[id]/interfaces/album-data-props.interface';
import { ArtistPropsInterface } from '@/app/(authorized)/artistprofile/[id]/interfaces/artist-props.interface';

export interface SongObject {
  id: number;
  name: string;
  artist: ArtistPropsInterface;
  coverImage: string;
  musicName: string;
  artistName: string;
  album: AlbumDataPropsInterface;
  duration: string;
}
