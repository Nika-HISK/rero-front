export type Song = {
  id: number | null;
  src: string;
  music: string;
  artist: string;
  audioSrc: string;
};

export interface SongPropsInterface {
  songs: Song[];
}
