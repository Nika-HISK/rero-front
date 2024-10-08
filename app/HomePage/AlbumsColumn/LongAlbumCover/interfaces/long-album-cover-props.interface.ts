import { TopAlbumLibraryPropsInterface } from '@/app/(authorized)/topalbums/components/TopAlbumLibrary/interfaces/top-album-library-props.interface';

export interface LongAlbumCoverPropsInterface {
  id: number;
  name: string;
  artistName: string;
  cover?: string;
  artist: TopAlbumLibraryPropsInterface;
}
