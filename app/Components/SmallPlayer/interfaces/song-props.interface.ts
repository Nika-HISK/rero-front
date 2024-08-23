export type Song = {
  src: string;
  music: string;
  artist: string;
  audioSrc: string;
};

export interface SongPropsInterface {
  songs: Song[];
}
