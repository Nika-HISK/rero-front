export interface ArtistDescriptionPropsInterface {
  biography: string;
  artistName: string;
  albums?: {
    artistName: string;
    music: string;
    cover: string;
    id: number;
    duration: string;
    albumName: string;
    name: string;
    coverImage: string;
  }[];
}
