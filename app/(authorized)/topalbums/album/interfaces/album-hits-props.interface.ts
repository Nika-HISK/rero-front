import { TopAlbumLibraryPropsInterface } from "../../components/TopAlbumLibrary/interfaces/top-album-library-props.interface";

export interface AlbumHitsPropsInterface {
  artist: TopAlbumLibraryPropsInterface;
  id: number;
  duration: string;
  albumName: string;
  cover: string;
  artistName: string;
  music: string;
}
