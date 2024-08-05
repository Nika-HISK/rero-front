export interface AudioPlayerPropsInterface {
  currentTime: number;
  duration: number;
  progressRef: React.RefObject<HTMLInputElement>;
  handleProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loop: boolean;
  toggleLoop: () => void;
}
