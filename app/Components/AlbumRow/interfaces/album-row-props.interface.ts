export interface AlbumRowPropsInterface {
  id: number;
  albumName: string;
  duration: string;
  cover: string;
  music: string;
  artistName: string;
  onPlusClick?: () => void;
  onRowAlbumClick?: () => void;
}
