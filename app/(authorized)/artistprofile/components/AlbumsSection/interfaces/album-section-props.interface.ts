export interface AlbumsSectionPropsInterface {
  artists: ArtistsPropsInterface[];
}

export interface ArtistsPropsInterface {
  coverImage: string;
  id: number;
  albumCover: string;
  name: string;
}
