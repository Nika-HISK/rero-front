export interface MusicRowPropsInterface {
  id: number | undefined;
  albumName: string | undefined;
  duration: string | null;
  coverImage: string;
  music: string;
  artistName: string;
  musicAudio: string;
  isPlaying: boolean;
  onClick: () => void;
}
