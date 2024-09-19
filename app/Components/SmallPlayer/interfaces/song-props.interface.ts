export type Song = {
  id: number;
  name: string;
  musicAudio: string;
  coverImage: string;
  duration: string;
};

export interface SongPropsInterface {
  songs: Song[];
}
