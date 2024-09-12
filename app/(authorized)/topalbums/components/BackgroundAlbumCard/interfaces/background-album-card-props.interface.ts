import { TopAlbumLibraryPropsInterface } from "../../TopAlbumLibrary/interfaces/top-album-library-props.interface";

export interface BackgroundAlbumCardPropsInterface {
  id: number;
  name: string;
  artist: TopAlbumLibraryPropsInterface;
  artistName: string;
  releaseDate: string;
  songCount: number;
  backgroundImage?: string;
}
