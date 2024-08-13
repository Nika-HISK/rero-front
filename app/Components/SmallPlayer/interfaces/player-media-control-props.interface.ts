export interface PlayerMediaControlPropsInterface {
  currentTime: number;
  duration: number;
  onProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTenSecondsBack: () => void;
  progressRef: React.RefObject<HTMLInputElement>;
  ipadProgressRef: React.RefObject<HTMLInputElement>;
}
