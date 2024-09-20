export interface AlbumsSectionPropsInterface {
  artists: ArtistsPropsInterface[];
}

export interface ArtistsPropsInterface {
  cover?: string;
  id: number;
  albumCover: string;
  name: string;
}
