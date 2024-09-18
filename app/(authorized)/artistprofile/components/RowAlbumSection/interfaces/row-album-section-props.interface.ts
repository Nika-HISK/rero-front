import { ArtistPropsInterface } from '../../../[id]/interfaces/artist-props.interface';
import { BackgroundAlbumCardPropsInterface } from '@/app/(authorized)/topalbums/components/BackgroundAlbumCard/interfaces/background-album-card-props.interface';

export interface RowAlbumSectionPropsInterface {
  albums: AlbumsPropsInterface[];
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
}
