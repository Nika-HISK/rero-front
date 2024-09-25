export interface MusicRowPropsInterface {
  id: number;
  albumName: string | undefined;
  duration: string | null;
  coverImage: string;
  music: string;
  artistName: string;
  musicAudio: string;
  isPlaying: boolean;
  onClick: () => void;
}
