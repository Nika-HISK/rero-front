export interface MusicBoxPropsInterace {
  id: number;
  artistName: string;
  musicName: string;
  cover: string;
  musicSrc: string;
  isPlaying: boolean;
  onClick: () => void;
}

export interface MusicProps {
  musics: MusicBoxPropsInterace[];
}
