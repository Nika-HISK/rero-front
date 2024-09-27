export interface HeaderInputSearchInterface {
  placeholder?: string;
  results?: string[] | undefined;
  onSelectResult?: (result: string) => void;
}

export interface InputAlbumPropsInterface {
  id: string;
  name: string;
}

export interface InputArtistInterface {
  id: string;
  artistName: string;
}

export interface InputMusicInterface {
  id: string;
  name: string;
}
