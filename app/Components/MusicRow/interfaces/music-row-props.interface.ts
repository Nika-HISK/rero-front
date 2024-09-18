export interface MusicRowPropsInterface {
  id: number;
  albumName: string;
  duration: string;
  coverImage: string;
  music: string;
  artistName: string;
  onPlusClick?: () => void;
  onRowAlbumClick?: () => void;
}
