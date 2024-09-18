export interface MusicRowPropsInterface {
  id: number;
  albumName: string;
  duration: string;
  coverImage: string;
  music: string;
  artistName: string;
  onRowAlbumClick?: () => void;
}
